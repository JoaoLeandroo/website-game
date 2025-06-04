import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guias Rose Online Brasil | Dicas, Tutoriais e Estratégias",
  description:
    "Aprenda tudo sobre o Rose Online Brasil com nossos guias completos. Tutoriais sobre classes, evolução, equipamentos, comércio, PvP e muito mais.",
  keywords: [
    "Guias Rose Online Brasil",
    "Tutoriais Rose Online",
    "Dicas de jogo Rose Online",
    "Guia de classes Rose Online",
    "Como jogar Rose Online",
    "RoseOnBR",
    "MMORPG em português",
    "Guia iniciante Rose Online",
    "Evoluir personagem",
    "Guia PvP Rose Online",
  ],
};

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
