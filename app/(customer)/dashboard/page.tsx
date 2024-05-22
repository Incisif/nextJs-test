import type {PageParams} from "@/types/next";
import {Layout} from "@/components/layout";

export default async function RoutePage(props: Readonly<PageParams<{}>>) {
    return (
        <Layout>
        <p>Page</p>
        </Layout>
    );
}