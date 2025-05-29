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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck } from "lucide-react";

export function TableAccount() {
  return (
    <div className="w-full flex items-center justify-center">
      <Tabs defaultValue="account" className="w-full max-w-[800px]">
        <TabsList className="grid w-full h-11 grid-cols-4">
          <TabsTrigger className="cursor-custom-hand" value="account">
            Account
          </TabsTrigger>
          <TabsTrigger className="cursor-custom-hand" value="edit">
            Meus dados
          </TabsTrigger>
          <TabsTrigger className="cursor-custom-hand" value="password">
            Trocar senha
          </TabsTrigger>
          <TabsTrigger className="cursor-custom-hand" value="logout">
            Deslogar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>loolraider@teste.com</CardTitle>
              <CardDescription>
                Bem vindo ao painel de controle, aqui voce pode gerencias, suas
                informações.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Alterar senha de - loolraiderteste@teste.com</CardTitle>
              <div>
                <p className="text-blue-700 text-xs select-none">
                  
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Nova senha</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Confirme sua nova senha</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="cursor-custom-hand">Alterar senha</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="edit">
          <Card className="w-full rounded-[2px] relative mb-20 z-10">
            <CardContent className="space-y-4">
              <CardHeader className="space-y-1 p-0 flex justify-between items-center">
                <div>
                  <p className="font-bold text-tittle text-xl">
                    Editar dados da conta
                  </p>
                  <p className="text-blue-700 text-xs select-none">
                    loolraider_123@teste.com
                  </p>
                </div>
                <div>
                  <ShieldCheck size={30} className="text-black" />
                </div>
              </CardHeader>
              <div className="flex justify-between gap-x-3 mt-10">
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="firistName" className="text-slate-400">
                    Primeiro Nome
                  </Label>
                  <Input
                    id="firistName"
                    type="text"
                    placeholder="Seu primeiro nome"
                    className="border-slate-400 text-slate-700 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="middleName" className="text-slate-400">
                    Nome do Meio
                  </Label>
                  <Input
                    id="middleName"
                    type="text"
                    placeholder="Nome do meio"
                    className="border-slate-400 text-slate-700 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="sobrenome" className="text-slate-400">
                    Sobrenome
                  </Label>
                  <Input
                    id="sobrenome"
                    type="text"
                    placeholder="Seu sobrenome"
                    className="border-slate-400 text-slate-700 placeholder:text-slate-400"
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
                <Label htmlFor="nameMother" className="text-slate-400">
                  Nome do Meio da sua Mãe
                </Label>
                <Input
                  id="nameMother"
                  type="text"
                  placeholder="Nome do meio da mãe"
                  className="border-slate-400 w-full md:w-[50%] text-slate-700 placeholder:text-slate-400"
                  required
                />
              </div>

              <Button className="w-full mt-2 h-11 cursor-custom-hand text-white bg-green-600 hover:bg-green-700 font-semibold">
                Fazer alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
