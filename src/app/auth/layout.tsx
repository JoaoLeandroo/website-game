import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rose Online Brasil | Gerenciamento de conta | Fazer login ou Criar conta",
  description:
    "Faça login ou crie sua conta gratuita no Rose Online Brasil. Acesse o MMORPG clássico e comece sua aventura hoje mesmo!",
  keywords: [
    "Login Rose Online",
    "Criar conta Rose Online Brasil",
    "Registro RoseOnBR",
    "Entrar no jogo",
    "Conta gratuita MMORPG",
    "Cadastrar-se Rose Online",
    "MMORPG em português",
    "Rose BR login",
    "Rose Online Brasil conta",
    "Jogar Rose Online",
  ],
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
