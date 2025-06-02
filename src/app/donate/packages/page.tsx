import SectionContent from "@/components/others/SectionContent";
import CardPack from "../_components/CardPack";
import { TriangleAlert } from "lucide-react";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";

const Packages = () => {
  return (
    <SectionContent>
      <section className="flex flex-col">
        <div className="mt-5">
          <BreadcrumbPages namePage="Sistema de doação" />
        </div>
        <div className="w-full bg-yellow-400 p-2 rounded">
          <p className="text-desc text-xs">
            <TriangleAlert size={20} />
            Bem vindo ao sistema de doações. Lembramos que a doação é
            facultativa e não reembolsável e o brinde para os doadores podem ser
            trocados por itens do jogo. Nosso sistema está totalmente
            automatizado, portanto, assim que você fizer uma doação, você
            receberá uma compensação por nos ajudar, que chamamos de RoseCash.{" "}
            <br />
            ATENÇÃO! O Cash será creditado na conta que você está logado no
            momento e não poderá ser transferido para outra conta. Caso deseje
            que o cash vá para outra conta, faça o login aqui no site novamente
            com a conta desejada. Se quiser doar e receber cash para 2 ou mais
            contas diferentes, logue com cada uma e faça a doação separadamente.
          </p>
        </div>

        <div className="flex gap-x-3 gap-y-4 mt-5 flex-wrap items-center justify-center">
          <CardPack
            namePack="Opala"
            amountRc={"100"}
            price={10}
            amountBrinde={10}
          />
          <CardPack
            namePack="Amethyst"
            amountRc={"220"}
            price={20}
            amountBrinde={20}
          />
          <CardPack
            namePack="Garnet"
            amountRc={"460"}
            price={40}
            amountBrinde={50}
          />
          <CardPack
            namePack="Esmeralda"
            amountRc={"700"}
            price={60}
            amountBrinde={100}
          />
          <CardPack
            namePack="Rubi"
            amountRc={"960"}
            price={80}
            amountBrinde={110}
          />
          <CardPack
            namePack="Esmeralda"
            amountRc={"1530"}
            price={120}
            amountBrinde={150}
          />
        </div>
      </section>
    </SectionContent>
  );
};

export default Packages;
