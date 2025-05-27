import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageCollector = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="collector" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Collector
          </h1>
          <span className="font-bold text-tittle">Acessando a habilidade</span>
          <p className="text-desc mb-5">
            Pressione <span className="font-bold">ALT + E</span> para abrir a
            interface de consumo. Em seguida, acesse a aba de habilidades na
            subcategoria de skills e compre a habilidade de Colecionador.
          </p>

          <span className="font-bold text-tittle">
            Invocando o animal de estimação
          </span>
          <p className="text-desc">
            Com a habilidade adquirida, pressione{" "}
            <span className="font-bold">ALT + S</span> e clique duas vezes na
            habilidade Colecionador para invocar seu animal de estimação
          </p>
        </div>
        <picture>
          <Image
            src={"/freatures/collector-2.avif"}
            width={1280}
            height={300}
            alt="skill collector 1"
            className="rounded shadow mt-1"
          />
        </picture>

        <picture className="flex flex-col mt-12 mb-20">
          <span className="font-bold text-tittle">Colecionando itens</span>
          <p className="text-desc mb-2">
            Com o pet invocado, basta ir para a área de combate. Ele coletará
            automaticamente os itens que caírem dos monstros.
          </p>
          <Image
            src={"/freatures/collector-1.avif"}
            width={1280}
            height={300}
            alt="skill collector 2"
            className="rounded shadow"
          />
        </picture>
      </section>
    </SectionContent>
  );
};

export default PageCollector;
