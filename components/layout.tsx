import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  "max-w-5xl w-full gap-4 mx-auto px-4 py-4",
  props.className,
]);
