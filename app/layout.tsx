import { mainFont } from "@/lib/fonts";
import { WrapperProps } from "@/types";
import "@/styles/globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Suspense } from "react";

export { metadata } from "./metadata";

const RootLayout = ({ children }: WrapperProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mainFont.className} antialiased `}>
        <NuqsAdapter>
          <Suspense>
            {children}
          </Suspense>
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;