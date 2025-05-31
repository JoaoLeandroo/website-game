"use client";

import SectionContent from "@/components/others/SectionContent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Gamepad2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";

export default function LoginDonate() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SectionContent>
      <section className="flex flex-col">
        <div className="mt-5">
          <BreadcrumbPages namePage="Login de doação" />
        </div>

        <div className="flex items-center justify-center p-4">
          <Card className="w-full rounded-[2px] max-w-md relative mt-8 mb-20 z-10">
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <div className="p-3 bg-blue-300 rounded-full">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <CardTitle className="text-2xl select-none font-bungee gradient-text-yellow drop-shadow-primary text-tittle">
                  Rose online Brasil
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Acesse o sistema de Doação
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-slate-400">
                  Digite seu username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite o Login do jogo"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-slate-400">
                  Informe sua senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    className="border-slate-400 text-slate-700 placeholder:text-slate-400"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 bg-transparent hover:bg-transparent border-l text-slate-400 hover:text-black cursor-custom-hand"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button className="w-full cursor-custom-hand text-white font-semibold">
                Entrar
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-slate-600" />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <p className="text-slate-400 text-sm">
                Esqueceu sua senha?{" "}
                <Link
                  href={"/auth/resetPassword"}
                  className="text-blue-400 hover:text-blue-300 cursor-custom-hand font-semibold"
                >
                  Recuperar senha.
                </Link>
              </p>
              <p className="text-sm text-slate-400">
                Leia os termos!{" "}
                <Link
                  href="/auth/terms"
                  className="text-blue-400 hover:text-blue-300 cursor-custom-hand font-semibold"
                >
                  Terms
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </SectionContent>
  );
}
