import type { Metadata } from "next";
import { Poppins, Bungee } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee"
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
        className={`${poppins.className} ${bungee.variable} antialiased background-site cursor-custom-sword `}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
