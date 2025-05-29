import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageGameArena = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Game Arena" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8">
            Game Arena
          </h1>
          <p className="text-desc mt-2 mb-5">
            No Game Arena, é possível acessar eventos exclusivos nos modos PvE e
            PvP. Para entrar no Game Arena, basta pressionar as teclas ALT + G,
            criar um grupo com outros jogadores, na aba{" "}
            <span className="font-bold">Grup</span> e participar do evento.
          </p>
        </div>
        <picture>
          <Image
            src={"/freatures/game-arena-1.avif"}
            width={1280}
            height={300}
            alt="game arena"
            className="rounded shadow mt-1"
          />
        </picture>

        <span className="font-bold text-tittle mt-8">Recompensas:</span>
        <p className="text-desc">
          Ao completar cada Game Arena, você é recompensado com uma quantidade
          de Dungeon Points. Esses pontos podem ser trocados na loja acessada
          pelo ALT + G. <br /> Quanto maior a dificuldade da arena, maior a
          recompensa em pontos. Dungeons como Ulverick e Grinch concedem
          recompensas extras, incluindo caixas gacha com fragmentos de gemas de
          3 status.
        </p>

        <picture className="flex flex-col gap-y-2 mt-1">
          <Image
            src={"/freatures/loja-game-arena.avif"}
            width={1280}
            height={300}
            alt="shop game arena"
            className="rounded shadow mb-20"
          />
        </picture>
      </section>
    </SectionContent>
  );
};

export default PageGameArena;
