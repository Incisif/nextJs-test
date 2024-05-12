"use server";
import { userAction,ActionError } from "@/safe-actions";
import { ProductSchema } from "./product.schema";
import prisma from "@/app/prisma";


export const createProductAction = userAction(
  ProductSchema,
  async (input, context) => {
    //verify is slug already exists 
    const slugExists = await prisma.product.count({
      where: {
        slug: input.slug,
      },
    });
    if (slugExists) {
      throw new ActionError("Slug already exists");
    }
    const product = prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });
    return product;
  }
);

export const editProductAction = async () => {
  return;
};
