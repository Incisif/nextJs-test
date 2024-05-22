import { PageParams} from "@/types/next";
import { requiredCurrentUser } from "@/auth/current-user";
import prisma from "@/app/prisma";

export default async function RoutePage(props: Readonly<PageParams<{productId: string;
}>>) {

  const user = await requiredCurrentUser();

  const product = await prisma.product.findUnique({
    where: {
      id: props.params.productId,
      userId: user.id,
    },
    include: {
      reviews: {
        where: {
          text: {
            not: null,
          },
          name: {
            not: null,
          },
        },
      },
    },
  });

  return (
    <div>
     {product?.name}
    </div>
  );
}