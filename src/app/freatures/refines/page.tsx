import SectionContent from "@/components/others/SectionContent";
import { TableRefines } from "@/components/others/TableRefines";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";
import AnimationsScroll from "@/components/others/AnimationsScroll";

const PageRefines = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Refines" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8">
            Refines
          </h1>
          <p className="text-desc mt-2 mb-5">
            Quer dar uma nova vida àquela arma antiga? Seu machado está gasto ou
            sua espada está cega? Talvez você queira fazer sua armadura brilhar
            mais? Refine seus itens! O processo de refinamento aumenta os
            atributos de suas armas e armaduras, tornando você mais poderoso em
            batalha. Embora haja alguns riscos envolvidos, os benefícios superam
            as desvantagens.
          </p>

          <span className="font-bold text-tittle">
            Preparando-se para o refinamento
          </span>
          <p className="text-desc">
            Escolha o item que deseja refinar e reúna todos os materiais
            necessários. Para refinar um item acima de +3, você precisará de
            Materiais Químicos, Materiais de Refinamento e Corações. A
            quantidade de materiais varia dependendo do nível de refinamento e
            do tipo de item.
          </p>
        </div>
        <picture>
          <Image
            src={"/freatures/refines.avif"}
            width={1280}
            height={300}
            alt="personagem refinando"
            className="rounded shadow"
          />
        </picture>

        <span className="font-bold text-tittle mt-8">
          Materiais Químicos
        </span>
        <p className="text-desc">
          Eles são essenciais para o processo de refinamento, qualidade do
          material utilizado afeta a taxa de sucesso. Materiais de maior
          qualidade aumentam suas chances de sucesso no refino.
        </p>

        <AnimationsScroll>
          <div className="flex flex-col mb-20">
            <span className="font-bold text-tittle mt-12">
              Tabela de Refinamento
            </span>
            <TableRefines />
          </div>
        </AnimationsScroll>
      </section>
    </SectionContent>
  );
};

export default PageRefines;
