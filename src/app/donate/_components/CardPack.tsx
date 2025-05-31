import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Star, Crown } from "lucide-react";

interface CardProps {
  namePack: string;
  price: string | number;
  amountRc: string | number;
  amountBrinde: string | number;
}

export default function CardPack({
  namePack,
  price,
  amountRc,
  amountBrinde,
}: CardProps) {
  return (
    <Card className="w-full max-w-xs bg-gradient-to-br from-blue-800 to-slate-800 border-slate-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-12 -translate-x-12" />

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
          >
            <Crown className="w-3 h-3 mr-1" />
            RoseOnBr
          </Badge>
          <Gamepad2 className="w-6 h-6 text-emerald-400" />
        </div>
        <CardTitle className="text-2xl font-bold">{namePack}</CardTitle>
        <CardDescription className="text-slate-300">
          Acesso completo a premiums e brindes exclusivos!
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-emerald-400">R$ {price}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{amountRc} Rose Cash</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Crown className="w-4 h-4 text-purple-400" />
            <span>{amountBrinde} pontos de brinde</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative z-10">
        <Button className="w-full bg-emerald-500 cursor-custom-hand hover:bg-emerald-600 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105">
          <Gamepad2 className="w-4 h-4 mr-2" />
          Comprar Agora
        </Button>
      </CardFooter>
    </Card>
  );
}
