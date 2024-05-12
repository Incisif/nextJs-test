import { PageParams} from "@/types/next";

export default async function RoutePage(props: Readonly<PageParams<{}>>) {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}