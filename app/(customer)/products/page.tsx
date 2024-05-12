import type { PageParams } from "@/types/next";
import prisma from "@/app/prisma";
import { Card } from "@/components/ui/card";
import { Layout, LayoutTitle } from "@/components/layout";
import { requiredCurrentUser } from "@/auth/current-user";
import { Table } from "lucide-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function RoutePage(props: Readonly<PageParams<{}>>) {
  const user = await requiredCurrentUser();
  const products = await prisma.product.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <Layout>
      <LayoutTitle>Products</LayoutTitle>
      <Card className="p-4">
        {products.length ? (
          <Table>
            <TableHeader>
              <TableHead>Name</TableHead>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Link
            href="/products/new"
            className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-primary p-8"
          >
            Create product
          </Link>
        )}
      </Card>
    </Layout>
  );
}
