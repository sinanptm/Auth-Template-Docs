import { mainFont } from "@/lib/fonts";
import { WrapperProps } from "@/types";
import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/next";
import { schemas } from "./schema";
import { metadataBase } from "./metadata";

export const metadata = metadataBase;

const RootLayout = ({ children }: WrapperProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mainFont.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                schemas.website,
                schemas.webApplication,
                schemas.softwareSourceCode
              ]
            })
          }}
        />
        <NuqsAdapter>
          {children}
          <Analytics />
        </NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;