import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageCraft = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Sistema de craft" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8">
            Sistema de Craft
          </h1>
          <p className="text-desc mt-2 mb-5">
            No jogo, os itens podem ser adquiridos de diversas maneiras: por
            meio de itens derrubados por monstros, comprados de NPCs ou criados
            pelos jogadores. O sistema de criação permite que os jogadores
            coletem os materiais necessários para criar itens específicos,
            oferecendo a chance de criar itens com atributos melhores do que
            aqueles encontrados como itens derrubados.
          </p>

          <span className="font-bold text-tittle">
            Especialização em Artisan
          </span>
          <p className="text-desc">
            A classe <span className="text-tittle font-bold">Artisan</span> é
            especializada na criação de itens, sendo capaz de criar quase todos
            os tipos de itens disponíveis no jogo. Itens criados geralmente têm
            atributos superiores aos obtidos por outros meios.
          </p>
        </div>

        <span className="font-bold text-tittle mt-3">
          Como criar itens
        </span>
        <picture>
          <Image
            src={"/freatures/craft-1.avif"}
            width={1280}
            height={300}
            alt="Craft itens 1"
            className="rounded shadow mt-1"
          />
        </picture>

        <ol className="flex list-decimal flex-col mt-8 px-4">
          <li className="text-desc">
            Selecione o tipo de item que deseja criar e escolha o item
            específico no menu suspenso.
          </li>
          <li className="text-desc">
            Os materiais necessários para a criação aparecerão nas caixas
            abaixo.
          </li>
          <li className="text-desc">
            Arraste todos os materiais necessários para a janela de criação.
          </li>
          <li className="text-desc">
            A taxa de sucesso e o custo serão exibidos, permitindo que você
            revise antes de começar.
          </li>
          <li className="text-desc">
            Quando tudo estiver pronto, clique em Iniciar para começar o
            processo.
          </li>
        </ol>

        <picture className="flex flex-col gap-y-2 mt-8">
          <span className="font-bold text-tittle mt-3">
            Craft Repetitivo
          </span>
          <Image
            src={"/freatures/craft-2.avif"}
            width={1280}
            height={300}
            alt="Craft itens 2"
            className="rounded shadow"
          />
        </picture>
        <p className="text-desc mt-5 mb-20">
          Na opção de criação repetitiva, você pode definir quantos itens deseja
          criar. É importante observar que o item só será criado se você tiver a
          quantidade necessária de materiais em seu inventário. Caso contrário,
          o processo será cancelado.
        </p>
      </section>
    </SectionContent>
  );
};

export default PageCraft;
