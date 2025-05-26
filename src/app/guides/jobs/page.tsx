import SectionContent from "@/components/others/SectionContent";
import AnimationLetters from "@/components/others/AnimationsLetters";
import AnimationsScroll from "@/components/others/AnimationsScroll";
import Image from "next/image";

const Jobs = () => {
  return (
    <SectionContent>
      <section className="px-4 lg:px-10 flex flex-col">
        <AnimationLetters>
          <h1 className="gradient-text-yellow font-bungee drop-shadow-primary text-3xl mt-12">
            Guia de Classes
          </h1>
          <p className="text-desc mt-2">
            Cada jogador começa como um visitante. Existem quatro Jobs para
            escolher em RoseOnBr. Além disso, existem duas classes para cada
            JOB, dando um total de oito CLASSES para os jogadores escolherem.
          </p>
          <div className="flex mt-8 gradient-text-yellow font-bungee drop-shadow-primary">
            <h2 className="text-tittle text-2xl font-semibold">
              Como Funcionam as classes
            </h2>
          </div>
        </AnimationLetters>

        <section className="mt-8">
          <h3 className="font-bold text-2xl text-tittle">Soldier</h3>
          <p className="text-desc">
            Como o próprio nome sugere, o soldier possui grande força e
            excelente capacidade de defesa. Ele é capaz de enfrentar monstros e
            inimigos muito poderosos sozinho.
          </p>
          <AnimationsScroll>
            <picture className="flex items-center justify-center gap-10">
              <Image
                src={"/persons/chara_soldier.png"}
                width={300}
                height={100}
                alt="Soldier"
                className="hidden md:block"
              />
              <Image
                src={"/persons/chara_warrior.png"}
                width={300}
                height={100}
                alt="Soldier"
              />
            </picture>
          </AnimationsScroll>
          <p className="text-desc">
            <span className="text-tittle font-bold">Armas: </span>
            Utiliza espadas de uma ou duas mãos, lanças e escudos.
          </p>
          <p className="mt-2 text-desc">
            2º Job (Especialização): Knight ou Champion
          </p>
          <ul className="list-disc mt-2 flex flex-col gap-y-2 px-4">
            <li className="text-desc">
              <span className="text-tittle font-bold">Knight: </span>
              Focado em defesa, é um ótimo parceiro para Clerics e Mages em
              grupos (parties), pois consegue suportar muitos ataques com pouco
              dano recebido. Normalmente utiliza espadas de uma mão combinadas
              com escudos.
            </li>
            <li className="text-desc">
              <span className="text-tittle font-bold">Champion: </span>
              Extremamente forte, utiliza armas de duas mãos e é capaz de
              derrotar monstros bem acima do seu nível.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="font-bold text-xl text-tittle">Muse</h3>
          <p className="text-desc">
            São magos que lutam por meio de seus poderes mágicos. Também possuem
            habilidades de cura e são capazes de aumentar os atributos (stats)
            próprios e dos aliados.
          </p>
          <AnimationsScroll>
            <picture className="flex items-center justify-center gap-10">
              <Image
                src={"/persons/chara_cleric.png"}
                width={300}
                height={100}
                alt="muse"
                className="hidden md:block"
              />
              <Image
                src={"/persons/chara_magician.png"}
                width={300}
                height={100}
                alt="muse"
              />
            </picture>
          </AnimationsScroll>
          <p className="text-desc">
            <span className="text-tittle font-bold">Armas: </span>
            Cajado (Staff) ou Varinha Mágica (Wand).
          </p>
          <p className="mt-2 text-desc">
            2º Job (Especialização): Mage ou Cleric
          </p>
          <ul className="list-disc mt-2 flex flex-col gap-y-2 px-4">
            <li className="text-desc">
              <span className="text-tittle font-bold">Mage: </span>
              Muito poderoso quando bem construído, é focado em magias ofensivas
              e possui alto dano mágico.
            </li>
            <li className="text-desc">
              <span className="text-tittle font-bold">Cleric: </span>
              Depende de grupos (parties) para evoluir, pois possui grandes
              habilidades de suporte, como buffs que aumentam os status dos
              aliados, mas tem dificuldade para enfrentar monstros sozinho.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="font-bold text-xl text-tittle">Hawker</h3>
          <p className="text-desc">
            São personagens ágeis, tanto no ataque quanto na movimentação.
            Possuem grande capacidade de esquiva, o que reduz significativamente
            a chance de serem atingidos pelos inimigos.
          </p>
          <AnimationsScroll>
            <picture className="flex items-center justify-center gap-10">
              <Image
                src={"/persons/chara_assassin.png"}
                width={300}
                height={100}
                alt="hawker"
                className="hidden md:block"
              />
              <Image
                src={"/persons/chara_archer.png"}
                width={300}
                height={100}
                alt="hawker"
              />
            </picture>
          </AnimationsScroll>
          <p className="text-desc">
            <span className="text-tittle font-bold">Armas: </span>
            Katar (Garras), Armas Duplas ou Arcos.
          </p>
          <p className="mt-2 text-desc">
            2º Job (Especialização): Raider ou Scout
          </p>
          <ul className="list-disc mt-2 flex flex-col gap-y-2 px-4">
            <li className="text-desc">
              <span className="text-tittle font-bold">Raider: </span>
              Extremamente rápido no ataque e na esquiva, ideal para combates
              corpo a corpo com agilidade.
            </li>
            <li className="text-desc">
              <span className="text-tittle font-bold">Scout: </span>
              Utiliza arco e flechas para ataques à longa distância, mantendo-se
              fora do alcance dos inimigos enquanto causa dano.
            </li>
          </ul>
        </section>

        <section className="mt-10 mb-20">
          <h3 className="font-bold text-xl text-tittle">Dealer</h3>
          <p className="text-desc">
            Fabricantes ou comerciantes, são os únicos capazes de criar qualquer
            tipo de item existente no jogo. Embora tenham uma movimentação e
            ataque mais lentos, são altamente propensos a acumular riqueza
            dentro do jogo.
          </p>
          <AnimationsScroll>
            <picture className="flex items-center justify-center gap-10">
              <Image
                src={"/persons/chara_gunner.png"}
                width={200}
                height={100}
                alt="dealer"
                className="hidden md:block"
              />
              <Image
                src={"/persons/chara_striker.png"}
                width={300}
                height={100}
                alt="dealer"
              />
            </picture>
          </AnimationsScroll>
          <p className="text-desc">
            <span className="text-tittle font-bold">Armas: </span>
            Revólveres, Rifles ou Canhões.
          </p>
          <p className="mt-2 text-desc">
            2º Job (Especialização): Artisan ou Bourgeois
          </p>
          <ul className="list-disc mt-2 flex flex-col gap-y-2 px-4">
            <li className="text-desc">
              <span className="text-tittle font-bold">Artisan: </span>
              Utiliza armas leves, pois precisa priorizar os atributos voltados
              à fabricação de itens. Compra materiais, fabrica diversos
              equipamentos e os vende para obter lucro.
            </li>
            <li className="text-desc">
              <span className="text-tittle font-bold">Bourgeois: </span>
              Especializado em comércio, consegue descontos ao comprar de NPCs.
              É mais forte em combate, utilizando bazucas em suas lutas. Acumula
              muitos itens e lucra revendendo materiais e equipamentos
              adquiridos por preços mais baixos.
            </li>
          </ul>
        </section>
      </section>
    </SectionContent>
  );
};

export default Jobs;
