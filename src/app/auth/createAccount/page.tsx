"use client";

import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
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

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SectionContent>
      <div className="flex flex-col">
        <div className="mt-5">
          <BreadcrumbPages namePage="Registrar usuario" />
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
              <CardTitle className="text-2xl select-none font-bungee gradient-text-yellow drop-shadow-primary text-tittle">
                Rose online Brasil
              </CardTitle>
              <CardDescription className="text-black">
                Crie sua conta aqui!
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-slate-700">
                Informe um Email valido.
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Digite seu e-Mail"
                className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                required
              />
            </div>
            <div className="flex justify-between gap-x-3 mt-10">
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="firistName" className="text-slate-700">
                  Primeiro Nome
                </Label>
                <Input
                  id="firistName"
                  type="text"
                  placeholder="Seu primeiro nome"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                  required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <Label htmlFor="middleName" className="text-slate-700">
                  Nome do Meio
                </Label>
                <Input
                  id="middleName"
                  type="text"
                  placeholder="Nome do meio"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                  required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <Label htmlFor="sobrenome" className="text-slate-700">
                  Sobrenome
                </Label>
                <Input
                  id="sobrenome"
                  type="text"
                  placeholder="Seu sobrenome"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                  required
                />
              </div>
            </div>
            <div className="w-full bg-blue-200 p-3 rounded mt-6">
              <p className="text-xs text-slate-700">
                <span className="text-red-500 font-[600]">IMPORTANTE!</span>{" "}
                Esta informação é necessária para que você possa trocar sua
                senha, preencha corretamente e use apenas UMA palavra, NÃO use
                por exemplo: (Teixeira Silva)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nameMother" className="text-slate-700">
                Nome do Meio da sua Mãe
              </Label>
              <Input
                id="nameMother"
                type="text"
                placeholder="Nome do meio da mãe"
                className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                Informe sua senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                  required
                />
                <Button
                  type="button"
                  size="sm"
                  className="absolute bg-transparent border-l hover:bg-transparent cursor-custom-hand right-0 top-0 h-full px-3 text-slate-700 hover:text-slate-800"
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

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                Confirme a senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                  required
                />
                <Button
                  type="button"
                  size="sm"
                  className="absolute bg-transparent border-l hover:bg-transparent cursor-custom-hand right-0 top-0 h-full px-3 text-slate-700 hover:text-slate-800"
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

            <div className="w-full bg-blue-200 p-3 rounded mt-6">
              <p className="text-xs text-slate-700">
                Agora você precisa criar um nome de usuário para poder fazer o
                login no jogo. Este nome de Usuário não é o nome do seu
                personagem, você irá escolher o nome do personagem dentro do
                jogo. O seu nome de usuário deverá conter de 4 a 14 caracteres e
                não pode conter espaço ou caracteres especiais, use apenas
                letras e números.
              </p>
            </div>

            <div className="space-y-1">
              <Label htmlFor="login" className="text-slate-700">
                Login de jogo
              </Label>
              <Input
                id="login"
                type="text"
                placeholder="Informe um login válido"
                className="border-slate-400 text-slate-700 placeholder:text-slate-700"
                required
              />
            </div>
            <div className="flex items-center gap-x-2">
              <Input type="checkbox" className="w-[15px] cursor-custom-hand" required/>
              <p className="font-bold text-slate-700 text-xs">
                Li os{" "}
                <Link
                  href={"/Account/terms"}
                  className="text-blue-700 hover:text-blue-600 cursor-custom-hand"
                >
                  Termos de uso
                </Link>{" "}
                e concordo.
              </p>
            </div>
            <Button className="w-full cursor-custom-hand text-white font-semibold">
              Cadastre-se
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-slate-600" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col">
            <p className="text-sm text-slate-700">
              Já possui conta?{" "}
              <Link
                href="/auth/login"
                className="text-blue-700 hover:text-blue-600 cursor-custom-hand"
              >
                Faça login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </SectionContent>
  );
}
