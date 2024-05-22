"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/feature/auth/SingInButton";
import { Layout } from "@/components/layout";

export default function RouteError() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>
            Product not found
          </CardTitle>
          <CardDescription>
            The product you are looking for does not exist or you do not have permission to view it.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <SignInButton />
        </CardFooter>
      </Card>
    </Layout>
  );
}
