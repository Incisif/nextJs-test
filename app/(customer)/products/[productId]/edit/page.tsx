import { PageParams } from "@/types/next";
import { Layout, LayoutTitle } from "@/components/layout";
import { ProductForm } from "./ProductForm";
import { currentUser } from "@/auth/current-user";
import prisma from "@/app/prisma";
import { notFound } from "next/navigation";

export default async function RoutePage(
  props: Readonly<PageParams<{ productID: string }>>
) {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

  const product = await prisma.product.findFirst({
    where: {
      id: props.params.productID,
      userId: user.id,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Layout>
      <LayoutTitle>Edit product</LayoutTitle>
      <ProductForm defaultValues={product} />
    </Layout>
  );
}
