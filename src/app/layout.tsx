import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rose Online Brasil - Página inicial",
  description: "Bem vindo ao rose online brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${open_sans.className} antialiased bg-background cursor-custom-sword`}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
