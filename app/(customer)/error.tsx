"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/feature/auth/SingInButton";
import { Layout } from "@/components/layout";

export default function RouteError() {
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>
            Sorry, you need to be logged in to view this page.
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <SignInButton />
          <SignInButton />
        </CardFooter>
      </Card>
    </Layout>
  );
}
