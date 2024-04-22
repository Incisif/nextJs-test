import type { LayoutParams } from "@/types/next";
import {Headers}from "@/feature/layout/Headers";

export default async function RouteLayout(props: Readonly<LayoutParams<{ }>>) {
    return (
        <div className="h-full">
            <Headers/>
        </div>
    );
}