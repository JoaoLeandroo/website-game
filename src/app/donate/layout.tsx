import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel de Doações | Apoie o Rose Online Brasil",
  description:
    "Apoie o Rose Online Brasil adquirindo pontos de doação. Receba recompensas exclusivas e contribua para manter o servidor ativo e atualizado.",
  keywords: [
    "Doações Rose Online",
    "Painel de donate RoseOnBR",
    "Apoiar servidor Rose Online",
    "Doar para Rose Online Brasil",
    "Pontos de donate",
    "MMORPG com doações",
    "Apoiar MMORPG",
    "Recompensas Rose Online",
  ],
};
export default function DonateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
