"use client";

import { ThemeProvider } from "@/feature/theme/ThemeProvider";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export type ProvidersProps = PropsWithChildren;

export function Providers(props: Readonly<ProvidersProps>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {props.children}
    </ThemeProvider>
  );
}
