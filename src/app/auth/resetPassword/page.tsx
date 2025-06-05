import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import SectionContent from "@/components/others/SectionContent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gamepad2 } from "lucide-react";

export default function ResetPassword() {
  return (
    <SectionContent>
      <div className="flex flex-col">
        <div className="mt-5">
          <BreadcrumbPages namePage="Recuperar senha" />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <Card className="w-full rounded-[2px] max-w-2xl relative mt-8 mb-20 z-10">
          <CardHeader className="text-center">
            <div className="flex justify-center">
              <div className="p-3 bg-blue-300 rounded-full">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl select-none font-bungee gradient-text-yellow drop-shadow-primary">
                Rose online Brasil
              </CardTitle>
              <CardDescription className="text-slate-700">
                <p>
                  Esqueceu sua senha? Não se preocupe! Informe o e-mail
                  cadastrado para que possamos gerar uma nova senha para você.
                </p>
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-slate-700">
                <p className="text-xs">Digite seu E-mail de cadastro.</p>
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Digite o email cadastrado"
                className="border-slate-400 text-slate-700 placeholder:text-slate-700 h-11"
                required
              />
            </div>
            <Button className="w-full cursor-custom-hand text-white font-semibold h-11">
              Me envie o Link para trocar a senha
            </Button>

            <div className="w-full bg-yellow-100 p-3 rounded">
              <p className="text-slate-700">
                Confira seu e-mail para saber como criar uma nova senha para sua
                conta. Se não encontrar na Caixa de Entrada,{" "}
                <span className="text-red-500 font-[600]">
                  verifique a pasta de Lixo Eletrônico ou Spam.
                </span>{" "}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionContent>
  );
}
