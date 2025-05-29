import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import ContainerMain from "@/components/others/ContainerMain";
import SectionContent from "@/components/others/SectionContent";
import Image from "next/image";
import Link from "next/link";
import AnimationsScroll from "@/components/others/AnimationsScroll";

const QuestPlanets = () => {
  return (
    <ContainerMain>
      <SectionContent>
        <div className="px-4 md:px-10 flex flex-col">
          <div className="mt-5">
            <BreadcrumbPages namePage="Quests planetarias" />
          </div>
          <section className="mb-16 flex flex-col items-center justify-center">
            <h1 className="font-bungee text-3xl mt-8 gradient-text-yellow drop-shadow-primary text-center">
              Quests Planetárias
            </h1>
            <p className="text-desc">
              Explore nossa coleção de guias detalhados para ajudar você a
              aproveitar ao máximo o RoseOnlineBrasil.
            </p>
          </section>
          <AnimationsScroll>
            <section className="flex flex-col items-center">
              <picture className="flex flex-wrap-reverse gap-y-3 gap-x-4 items-center justify-center lg:justify-between lg:flex-nowrap">
                <div className="w-full lg:w-[50%] flex flex-col gap-y-3">
                  <h4 className="text-tittle font-bold text-2xl">Quest Luna</h4>
                  <p className="text-desc">
                    Ao atingir o nível 40, fale com o NPC{" "}
                    <b className="font-[600]">Alphonso</b>, responsável por
                    realizar transportes para outros planetas em Junon Polis. Ao
                    chegar à Magic City of the Eucar, capital do planeta Luna,
                    você deverá localizar o NPC{" "}
                    <b className="font-[600]">Eliot</b> e conversar com ele para
                    aprender o idioma local.
                  </p>
                </div>
                <Image
                  src={"/guides/luna_.avif"}
                  width={720}
                  height={0}
                  alt="planeta Luna"
                  className="rounded shadow-md w-[720px]"
                />
              </picture>
            </section>
          </AnimationsScroll>
          <AnimationsScroll>
            <section className="flex flex-col items-center mt-20">
              <picture className="flex flex-wrap gap-y-3 gap-x-4 items-center justify-center lg:justify-between lg:flex-nowrap">
                <Image
                  src={"/guides/oro_.avif"}
                  width={720}
                  height={0}
                  alt="planeta hebarn"
                  className="rounded shadow-md w-[720px]"
                />
                <div className="w-full lg:w-[50%] flex flex-col gap-y-3">
                  <h3 className="text-tittle font-bold text-2xl">Quest oro</h3>
                  <p className="text-desc">
                    Fale com o Ruven em Junon Polis, ele irá falar sobre uma
                    nave misteriosa que caiu em Adventures Plains e você deverá
                    investigar. Chegando em Adventures, procure pelo{" "}
                    <b className="font-[600]">Homem Misterioso (Osiris)</b>. Ele
                    dirá que está com fome e mal consegue falar. E pedirá um
                    pouco de Peixe.Você deve ir até o centro da vila de
                    Adventures Plains e procurar pela{" "}
                    <b className="font-[600]">Reene</b>.
                  </p>
                </div>
              </picture>

              <div className="text-left w-full p-2 mt-5">
                <ol className="list-decimal p-5 flex flex-col gap-y-2 text-desc">
                  <li>
                    <p>
                      Você perguntará se ela tem peixe e ela irá pedir que você
                      busque um pouco em Anima Lake para que ela possa preparar
                      o Prato para Osiris. Basta usar scroll para Junon Polis e
                      seguir para Anima Lake (olhe no mapa)
                    </p>
                  </li>
                  <li>
                    <p>
                      Chegando em Anima Lake, pelo portal de Junon é só seguir
                      reto e irá encontrar os Aqua Guard{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Depois disso volte a Reene e entregue os materiais (são
                      10).
                    </p>
                  </li>
                  <li>
                    <p>Fale novamente com Reene e ela irá entregar o Prato.</p>
                  </li>
                  <li>
                    <p>
                      Volta no NPC Osiris e entregue o Prato, ele te entregará
                      um emblema misterioso e pedirá que fale com{" "}
                      <b className="font-[600]">Mairath</b>, que fica bem
                      Próximo a Reene ali no{" "}
                      <b className="font-[600]">
                        centro da Vila de Adventures Plains
                      </b>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      Mairath pedirá que você vá falar com{" "}
                      <b className="font-[600]">Quintis em Elveerloon Desert</b>
                      . Depois de falar com Quintis, deverá ir em Forest of
                      Wisdom, passando por Anima Lake e procurar pela grande
                      Árvore Wisdom Tree em Forest of Wisdom.{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      Agora retorne ao Osiris em Adventures Plains para contar o
                      que voce descobriu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Agora, ele pediu para você encontrar a Ancient Statue na
                      Treasure Chamber. Dentro da pirâmide, no deserto de El
                      Verlon, será necessário subir por uma rampa invisível ao
                      redor do pilar. Basta clicar no chão da rampa, mesmo que
                      nada apareça, para subir com os cliques do mouse. Tenha
                      cuidado para não cair.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ao entrar na pirâmide, procure pela Ancient Statue na
                      Treasure Chamber. Após falar com ela, você será instruído
                      a conversar com a Salamander, que também está dentro da
                      pirâmide.
                    </p>
                  </li>
                  <li>
                    <p>
                      Após conversar com a Salamander, ela invocará o monstro
                      Firelord. Derrote-o e retorne à Ancient Statue na Treasure
                      Chamber.
                    </p>
                  </li>
                  <li>
                    <p>
                      Agora, você precisa ir até Kenji Beach e procurar pelo
                      tablet deixado pelos anciões.
                    </p>
                  </li>
                  <li>
                    <p>
                      O diálogo dos tablests aparece automaticamente em frente a
                      esses dois barris na praia de kenji beach. Assim que
                      concluir, basta retornar ao Osiris em Adventures Plains.
                      Após falar com Osiris, ele pedirá que você entregue os
                      Blueprints ao Ruven em Junon Polis.
                    </p>
                  </li>
                  <li>
                    <p>
                      Assista as demais etapas no vídeo:{" "}
                      <Link
                        target="_blank"
                        href={"https://www.youtube.com/watch?v=LNKSRU3REVE"}
                        className="cursor-custom-hand text-blue-400"
                      >
                        Guia youtube
                      </Link>
                    </p>
                  </li>
                </ol>
              </div>
            </section>
          </AnimationsScroll>

          <AnimationsScroll>
            <section className="flex flex-col items-center mt-10">
              <picture className="flex flex-wrap-reverse gap-y-3 gap-x-4 items-center justify-center lg:justify-between lg:flex-nowrap">
                <div className="w-full lg:w-[50%] flex flex-col gap-y-3">
                  <h4 className="text-tittle font-bold text-2xl">
                    Quest Karkia
                  </h4>
                  <p>
                    Fale com o NPC Alphonso, que é responsável por teleportar
                    para outros planetas em Junon. Ele irá entregar a quest e
                    indicar os próximos passos.
                  </p>
                </div>
                <Image
                  src={"/guides/karkia_.avif"}
                  width={720}
                  height={0}
                  alt="planeta karkia"
                  className="rounded shadow-md w-[720px]"
                />
              </picture>

              <div className="text-left w-full p-2 mt-5">
                <ol className="list-decimal p-5 flex flex-col gap-y-2 text-desc">
                  <li>
                    <p>
                      Os mobs da primeira parte ficam em Paradise of RA do lado
                      do lago.
                    </p>
                  </li>
                  <li>
                    <p>
                      Os itens necessários são dropados em Kenji Beach das
                      Pedras Kings (Mana Oil e Mana Heat) e os demais você
                      consegue dropar em qualquer mapa de Oro.
                    </p>
                  </li>
                  <li>
                    <p>
                      Com relação à quantidade necessária: 200 Damascus (Dropa
                      em Oro) 20 Mana Oil (Dropa em Junon - Kenji Beach daquelas
                      pedras Kings) 10 Steam Viper (Desmonta de Carts e Equips
                      de Carts) 10 Mana Heat (Dropa em Junon - Kenji Beach
                      daquelas pedras Kings) 5 Mana Generator (Dropa em Oro) 5
                      Mana Load (Dropa em Oro) 5 Mana Article (Dropa em Oro)
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            <section className="flex flex-col items-center mt-10">
              <picture className="flex flex-wrap gap-y-3 gap-x-4 items-center justify-center lg:justify-between lg:flex-nowrap">
                <Image
                  src={"/guides/arua_.avif"}
                  width={720}
                  height={0}
                  alt="planeta Arua"
                  className="rounded shadow-md w-[720px]"
                />
                <div className="w-full lg:w-[50%] flex flex-col gap-y-3">
                  <h5 className="text-tittle font-bold text-2xl">
                    Quest Skaaj / Hebarn
                  </h5>
                  <p>definir novo texto.</p>
                </div>
              </picture>

              <div className="text-left w-full p-2 mt-5 mb-20">
                <ol className="list-decimal p-5 flex flex-col gap-y-2 text-desc">
                  <li>
                    <p>
                      (As Filhas de Landregin) e início de A Pirâmide do
                      Destino. Pega no Jones tendo todas as Tabuas (Bronze
                      Ancient Table, Silver Ancient Table, Gold Ancient Table,
                      Platinum Ancient Table e Diamond Ancient Table [Bronze Até
                      Platinum Dropa em Prison. Diamond dropa em Oro]). Ele vai
                      te mandar conversar com Lutis (fica em Valley of Luxem
                      Tower, na torre logo q sai de Zant) pra aprender sobre uma
                      familia lá. Lutis vai te mandar falar com o NPC ao lado
                      dele (Karitte). Kattrine vai te mandar falar com Harin
                      (Taver Owner em Junon, lá perto de onde compra Scroll). Tu
                      volta no Jones e entrega a primeira parte da quest. A
                      partir daqui a quest Pirâmide do Destino fica em stand-by
                      e existirão outras que devem ser completadas.
                    </p>
                  </li>
                  <li>
                    <p>
                      (Luto por Madreson) O primeiro NPC (Shroon) ta no meio do
                      Lago em Anima Lake. Esse NPC manda tu falar com um que tá
                      lá em El Verloon Desert (Orias) numa vila em cima de uma
                      pirâmide. Esse NPC vai te mandar falar com um Mercador
                      Cigano (Methio) que fica na mesma vila dps do laguinho.
                      Dps disso tu volta no Jones e entrega a segunda parte da
                      quest.
                    </p>
                  </li>
                  <li>
                    <p>
                      (Khan vs Char): Ele te manda falar com Jeffrey Loyd (NPC
                      que vende Skill Nv. 200 em Eldeon). Selecionando as opções
                      certas no diálogo, o Jeffrey vai te mandar falar com Darka
                      Khan (na frente de onde compra Scroll em Xita). Ele vai te
                      mandar falar com Namiel Char, que fica no lugar q eu vou
                      mandar na imagem ali embaixo. Depois disso volta pro Jones
                      e entrega a 3ª parte.
                    </p>
                  </li>
                  <li>
                    <p>
                      (Coração Gelado de Krisdados): Essa parte é em Luna. O
                      primeiro NPC que tem que falar é o Eliot (NPC que ensina o
                      idioma de Luna e Karkia). Selecionando as opções certas
                      ele vai te mandar falar com Pabel (o que vende scroll em
                      Eucar). Tendo falado com ele, retorna pro Jones e entrega
                      a 4ª parte.
                    </p>
                  </li>
                  <li>
                    <p>
                      (Herdeiro dos Anônimos): Jones diz para encontrar alguém
                      que já está morto. Em Desert of The Dead (DoD) você deve
                      falar com Lantore para prosseguir na quest.
                      <br />O Padre Morto diz para encontrar alguém que pode
                      falar com os Deuses. Esse alguém é a {"Arua's"} Fairy lá
                      em Adventure Plains (mapa que nasce char novo, logo em
                      frente ao spawn). Depois disso é só voltar em Junon e
                      entregar a 5ª parte ao Jones.
                    </p>
                  </li>
                  <li>
                    <p>
                      (de volta na quest A Pirâmide do Destino): Vai pra El
                      Verloon Desert e fala com o Williams, atrás da base da
                      pirâmide. Depois disso só subir na pirâmide e entregar pra
                      um dos Servos (Arua ou Hebarn). O que tu escolher vai ser
                      o Planeta que tu pode Ir (o de Arua leva pra Skaaj)
                    </p>
                  </li>
                </ol>
              </div>
            </section>
          </AnimationsScroll>
        </div>
      </SectionContent>
    </ContainerMain>
  );
};

export default QuestPlanets;
