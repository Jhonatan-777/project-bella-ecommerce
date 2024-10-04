import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { Header } from "@/components/header/header-component/header";
import ClientProviders from "./styles/clientProviders";
import Pagination from "@/components/template/pagination/Pagination";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bella E-commerce",
  description: "Bella E-commerce clothing products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={roboto.className}>
          <ClientProviders>
            <Header />
            <Pagination>{children}</Pagination>
          </ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
