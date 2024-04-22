import type {PageParams} from "@/types/next";

export default async function RoutePage(props: Readonly<PageParams<{}>>) {
    return (
        <div>
        <p>Page</p>
        </div>
    );
}