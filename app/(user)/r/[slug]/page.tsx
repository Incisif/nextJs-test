import type { PageParams } from "@/types/next";
import prisma from "@/app/prisma";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReviewStep } from "./ReviewStep";

export default async function RoutePage(
  props: Readonly<PageParams<{ slug: string }>>
) {
  const product = await prisma.product.findFirst({
    where: {
      slug: props.params.slug,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center p-4",
        product.backgroundColor
      )}
    >
      <div className="flex items-center gap-2">
        {product.image ? (
          <Image src={product.image} alt={product.name} className="size-8" width={32} height={32}/>
        ) : null}
        <h1 className="text-lg font-bold ">{product.name}</h1>
      </div>
      <div className="flex-1">
        <ReviewStep product={product}/>
      </div>
    </div>
  );
}
