import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";
import Link from "next/link";

const PageStarting = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Guia para iniciantes" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Guia para novos jogadores
          </h1>
          <span className="font-bold text-tittle">
            Dicas para quem está começando no{" "}
            <span className="font-bold">Rose Online Brasil</span>
          </span>
          <p className="text-desc">
            Após criar seu personagem, você nascerá em {"Adventurer's Plains"},
            o primeiro mapa do planeta Junon. É aqui que você começará a
            aprender as mecânicas básicas do ROSE Online.
          </p>{" "}
          <br />
          <p className="text-desc">
            Uma das primeiras coisas que você deve fazer é se familiarizar com a
            interface do jogo{" "}
            <Link
              href={"/"}
              className="cursor-custom-hand text-blue-500 hover:text-blue-600"
            >
              Veja aqui
            </Link>
            . Fique atento também às dicas que aparecem no topo da tela e às
            instruções exibidas quando surgirem ícones com interrogação – eles
            oferecem informações valiosas para novos jogadores.
          </p>{" "}
          <br />
          <p className="text-desc">
            Logo na saída do local onde você nasceu, procure pela NPC{" "}
            <span className="font-bold text-tittle">
              {"Arua's "}
              Fairy
            </span>
            . Ela é essencial para o seu progresso inicial! Com ela, você
            aprenderá como se mover, lutar, comprar e vender itens com os NPCs,
            usar suas habilidades básicas (skills), entender os atributos do seu
            personagem (status) e muito mais. Todas essas instruções são
            extremamente importantes para aproveitar o máximo do jogo.
          </p>{" "}
          <br />
          <p className="text-desc">
            Ao completar todas as instruções fornecidas por {"Arua's "}
            Fairy , você receberá 10 pontos de status, um bônus valioso que fará
            diferença ao longo da sua aventura.
          </p>
          <picture className="flex items-center justify-center">
            <Image
              src={"/guides/iniciando.jpg"}
              width={620}
              height={425}
              alt="Inicio do jogo"
              className="rounded shadow mt-1 mb-8"
            />
          </picture>
          <p className="text-desc mt-5 mb-8">
            Conforme for jogando, explore o mapa e enfrente monstros cada vez
            mais fortes até, pelo menos, alcançar o nível 7. Depois disso, siga
            em direção à Luxem Tower. Ao entrar nesse novo mapa, continue
            evoluindo até chegar ao nível 10. A partir daí, vá para a Canyon
            City of Zant, conhecida simplesmente como Zant. Essa é a principal
            cidade para personagens de até nível 25. Lá, você encontrará
            diversos NPCs importantes — incluindo aquele que o ajudará a
            escolher sua primeira profissão!
          </p>
          <span className="font-bold text-tittle">
            Escolhendo sua Profissão
          </span>
          <p className="text-desc">
            Você poderá escolher uma profissão assim que atingir o nível 10,
            falando com o NPC Warren, localizado na cidade de Zant.
          </p>
          <picture className="flex items-center justify-center">
            <Image
              src={"/guides/warren.avif"}
              width={1280}
              height={425}
              alt="NPC WARREN"
              className="rounded shadow mt-1 mb-12"
            />
          </picture>
          <p className="text-desc">
            Para conhecer melhor os mapas do planeta Junon, clique no botão Mapa
            Mundo que aparece na janelinha do mini-mapa dentro do jogo.
          </p>{" "}
          <br />
          <p className="text-desc">
            Ao chegar em Zant, fale com Warren, escolha a profissão desejada, e
            ele indicará qual NPC o acompanhará na jornada para se tornar
            oficialmente o que escolheu.
          </p>{" "}
          <br />
          <p className="text-desc">
            Vá até o NPC indicado, que irá lhe oferecer uma tarefa (quest) para
            provar que você tem o que é preciso para seguir nessa carreira.
          </p>{" "}
          <br />
          <p className="text-desc">
            Na aba de Quests, você poderá acompanhar sua primeira missão. Siga
            corretamente as instruções e, quando concluí-la, volte ao mesmo NPC.
            Geralmente, ele oferecerá uma segunda missão. Complete também essa
            tarefa e retorne a ele.
          </p>{" "}
          <br />
          <p className="text-desc">
            Ao cumprir as missões, o NPC lhe entregará um Certificado, que
            comprova sua aptidão para exercer a profissão escolhida. Leve esse
            certificado de volta ao Warren, e ele confirmará sua nova classe —
            além de te dar uma recompensa especial, relacionada à profissão que
            escolheu!
          </p>{" "}
          <br />
          <div className="mb-20">
            <i className="text-desc">
              A partir de agora, sua jornada está apenas começando! <br />
              Você vai descobrir muito mais praticando, explorando, enfrentando
              desafios e, claro, conversando com os amigos que fará ao longo do
              caminho. <br />
              Vamos juntos ajudar a Deusa Arua na batalha contra o maligno Deus
              Hebarn, nessa emocionante jornada por Rush On Seven Episodes
              (ROSE)!
            </i>
          </div>
        </div>
      </section>
    </SectionContent>
  );
};

export default PageStarting;
