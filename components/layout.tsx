import { twx } from "@/lib/twx";

export const Layout = twx.div((props) => [
  "max-w-5xl w-full flex flex-col  gap-4 mx-auto px-4 py-2",
  props.className,
]);

export const LayoutTitle = twx.h1((props) => [
  "text-3xl font-bold",
  props.className,
]);
