import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageBox = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Sistema de box" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Sistema de Box
          </h1>
          <span className="font-bold text-tittle">
            Visualização do conteúdo da caixa
          </span>
          <p className="text-desc">
            Para ver o que há dentro de uma caixa, pressione a tecla{" "}
            <span className="font-bold">ALT + Clique do mouse</span> sobre a
            caixa.
          </p>

          <picture>
            <Image
              src={"/freatures/gacha2.avif"}
              width={1280}
              height={300}
              alt="gacha"
              className="rounded shadow mt-1"
            />
          </picture>
        </div>

        <picture className="flex flex-col mt-5 mb-20">
          <span className="font-bold text-tittle">
            Exibição de conteúdo
          </span>
          <p className=" text-desc">
            Em seguida, uma nova aba será aberta, mostrando todos os itens
            contidos na caixa.
          </p>

          <Image
            src={"/freatures/gacha-1.avif"}
            width={1280}
            height={300}
            alt="gacha"
            className="rounded shadow"
          />
        </picture>
      </section>
    </SectionContent>
  );
};

export default PageBox;
