"use server";
import { userAction, ActionError } from "@/safe-actions";
import { ProductSchema } from "./product.schema";
import prisma from "@/app/prisma";
import { z } from "zod";

//helper to verify if slug already exists
const slugExists = async (slug: string, productId?:string) => {
  const slugExists = await prisma.product.count({
    where: {
      slug: slug,
      id: productId ? {
        not: productId,
      }: undefined,
    },
  });
  if (slugExists) {
    throw new ActionError("Slug already exists");
  }
};

//create product action
export const createProductAction = userAction(
  ProductSchema,
  async (input, context) => {
    await slugExists(input.slug);
    const product = prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });
    return product;
  }
);

export const editProductAction = userAction(
  z.object({
    id: z.string(),
    data: ProductSchema,
  }),
  async (input, context) => {
    await slugExists(input.data.slug, input.id);

    const updatedProduct = await prisma.product.update({
      where: {
        id: input.id,
        userId: context.user.id,
      },
      data: input.data,
    });

    return updatedProduct;
  }
);
