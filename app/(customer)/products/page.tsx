import type { PageParams } from "@/types/next";
import prisma from "@/app/prisma";
import { Card } from "@/components/ui/card";
import { Layout, LayoutTitle } from "@/components/layout";
import { requiredCurrentUser } from "@/auth/curent-user";
import { Table } from "lucide-react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <Table>
          <TableHeader>
            <TableHead>Name</TableHead>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <div key={product.id}>
                <TableRow></TableRow>
                <TableCell>{product.name}</TableCell>
              </div>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Layout>
  );
}
