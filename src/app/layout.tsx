import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
