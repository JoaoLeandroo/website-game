import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageQuickSwitch = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="off vending" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Lojinhas Offline
          </h1>
          <span className="font-bold text-tittle">
            Acesse a Habilidade
          </span>
          <p className="text-desc mb-2">
            Pressione a tecla de atalho{" "}
            <span className="font-bold">Alt + S</span> e procure o ícone de
            venda automática.
          </p>
          <span className="font-bold text-tittle">
            Configurando sua loja
          </span>
          <p className="text-desc mb-2">
            Com a habilidade aberta, você poderá arrastar qualquer item para a
            loja e colocá-lo à venda. Além disso, você pode comprar os itens que
            desejar diretamente da loja.
          </p>
          <span className="font-bold text-tittle">
            Manutenção da Loja
          </span>
          <p className="text-desc mb-2">
            Depois de abrir sua loja, você pode sair da sua conta e ela
            permanecerá aberta. Isso economiza recursos do seu computador,
            permitindo que você use outra conta para farmar ou jogar PvP ao
            mesmo tempo.
          </p>

          <picture>
            <Image
              src={"/freatures/off-shop.avif"}
              width={1280}
              height={300}
              alt="quick switch"
              className="rounded shadow mt-5 mb-5"
            />
          </picture>

          <div className="mb-20">
          </div>
        </div>
      </section>
    </SectionContent>
  );
};

export default PageQuickSwitch;
