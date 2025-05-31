import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PagePvP = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Sistema de combate" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Sistema de Combate
          </h1>
          <p className="text-desc mb-5">
            O sistema de combate do Rose Online Brasil pode ser utilizado de
            duas formas: por meio da skill de duelo, obtida com o NPC Leonard em
            Zant, ou em mapas PvP, como o Desert of the Death. Quando um jogador
            estiver com o nome vermelho, isso indica perigo — ele pode atacá-lo
            a qualquer momento.
          </p>

          <span className="font-bold text-tittle mt-8">
            Como usar a skill de duelo?
          </span>
          <p className="text-desc">
            Vá até Zant e fale com o NPC Leonard. Procure pela skill básica
            chamada Duel, compre-a, vá até a aba de consumo e use a skill. Em
            seguida, pressione ALT + S, acesse a aba Básicas e localize a skill
            de duelo.
          </p>

          <picture>
            <Image
              src={"/freatures/buy-skill.avif"}
              width={1280}
              height={300}
              alt="skill de duelo"
              className="rounded shadow mt-1 mb-2"
            />
            <Image
              src={"/freatures/skill-duel.avif"}
              width={1280}
              height={300}
              alt="skill de duelo"
              className="rounded shadow mt-2 mb-2"
            />
          </picture>

          <p className="text-desc mb-5">
            Para utilizar a skill, basta encontrar um oponente do seu nível,
            selecionar o nome dele, ir até a aba de skills, clicar na skill de
            duelo e enviar o pedido de duelo. O seu oponente terá a opção de
            aceitar ou recusar.
          </p>
          <picture>
            <Image
              src={"/freatures/duel.avif"}
              width={1280}
              height={300}
              alt="skill de duelo"
              className="rounded shadow mt-1 mb-2"
            />
          </picture>

          <span className="font-bold text-tittle">PvP mapa aberto</span>
          <p className="text-desc mb-20">
            O PvP em mapa aberto ocorre em algumas áreas específicas do jogo,
            como Geb Desert, Desert of the Death e Sikuku Ruins. Esses mapas são
            totalmente PvP, ou seja, todos os jogadores são considerados
            inimigos — com exceção daqueles que pertencem ao mesmo clã, que se
            tornam aliados dentro do mapa. <br />
            No entanto, em Desert of the Death, até mesmo membros do mesmo clã
            podem se atacar. Por isso, fique atento por onde anda — você pode
            ser morto por inimigos poderosos. Torne-se mais forte e esteja
            sempre preparado para se defender nesses territórios!
          </p>
        </div>
      </section>
    </SectionContent>
  );
};

export default PagePvP;
