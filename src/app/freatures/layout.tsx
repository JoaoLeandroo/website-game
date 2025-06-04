import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freatures Rose Online Brasil | Classes, Mapas, Sistemas e Mais",
  description: "Descubra todos os recursos e sistemas do Rose Online Brasil. Explore as classes, mapas, equipamentos, monstros e muito mais neste MMORPG clássico gratuito.",
  keywords: [
    "Funcionalidades Rose Online",
    "Recursos Rose Online Brasil",
    "Classes Rose Online",
    "Sistemas de jogo",
    "Mapas do Rose Online",
    "Monstros Rose Online",
    "Equipamentos",
    "Guia Rose Online",
    "MMORPG recursos",
    "RoseOnBR features"
  ]
};

export default function FreaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{ children }</div>
  );
}
