import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageQuickSwitch = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Quick Switch" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Quick Switch
          </h1>
          <span className="font-bold text-tittle">
            Como facilitar a troca de itens no jogo usando uma habilidade
          </span>
          <p className="text-desc">
            Pressione a tecla de atalho{" "}
            <span className="font-bold">Alt + I</span> para ativar a capacidade
            de troca, encontre o icone de troca rapida.
          </p>

          <picture>
            <Image
              src={"/freatures/switch-2.avif"}
              width={1280}
              height={300}
              alt="quick switch"
              className="rounded shadow mb-5"
            />
          </picture>

          <span className="font-bold text-tittle">
            Adicionando itens à habilidade
          </span>
          <p className="text-desc">
            Após ativar a habilidade, arraste os itens desejados do seu
            inventário para ela. Basta clicar nos itens e arrastá-los para o
            espaço da habilidade.
          </p>

          <picture>
            <Image
              src={"/freatures/switch.avif"}
              width={1280}
              height={300}
              alt="quick switch"
              className="rounded shadow mb-2"
            />
          </picture>

          <div>
            <span className="font-bold text-tittle">
              Criando um atalho rápido
            </span>
            <p className="text-desc mb-5">
              Com a linha de switch criada, clique e segure sobre ela e arraste-a
              para uma tecla de atalho na barra de atalhos
            </p>
            <span className="font-bold text-tittle">Realização da Troca</span>
            <p className="text-desc mb-20">
              Agora, sempre que você quiser trocar itens rapidamente, basta
              pressionar a tecla da barra de atalho onde você salvou a
              habilidade.
            </p>
          </div>
        </div>
      </section>
    </SectionContent>
  );
};

export default PageQuickSwitch;
