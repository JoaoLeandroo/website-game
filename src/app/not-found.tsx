import Link from "next/link";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
            <Gamepad2 className="h-32 w-32 text-blue-600 animate-pulse" />
          </div>
          <h1 className="text-9xl font-bold text-blue-600 mt-8">404</h1>
        </div>

        <div className="space-y-4 mt-">
          <p className="text-xl text-gray-400">
            O nível que você está procurando não foi encontrado
          </p>

          <div className="rounded-lg p-6 mt-8 space-y-4">
            <p className="text-sm text-gray-400">
              Parece que você seguiu um link quebrado ou digitou um endereço que
              não existe.
            </p>

            <Button
              asChild
              className="bg-primary hover:bg-blue-600 text-white w-full"
            >
              <Link
                href="/"
                className="flex items-center justify-center gap-2 cursor-custom-hand"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para o início
              </Link>
            </Button>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Quer reportar um problema?{" "}
          <Link
            href={"https://discord.com/invite/4kAksB4"}
            target="_blank"
            className="text-blue-300 cursor-custom-hand hover:underline"
          >
            Entre em contato
          </Link>
        </p>
      </div>
    </div>
  );
}
