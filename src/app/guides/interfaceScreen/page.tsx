import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageStarting = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Interface" />
        </div>

        <article>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Interface e Janelas
          </h1>
          <span className="font-bold text-tittle">
            Janela de Status do Personagem (ALT + A)
          </span>
          <p className="text-desc">
            Esta janela mostra as informações básicas do seu personagem, como o
            nível atual do seu HP / MP, pontos de experiência e qual a arma você
            esta usando no momento.
          </p>{" "}
          <p className="text-desc">
            A Janela Personagem mostra todas as informações do seu personagem, e
            é onde você adiciona os pontos nos status desejados
          </p>{" "}
          <Image
            src={"/interface/status.avif"}
            width={1280}
            height={400}
            alt="Visualização dos status"
            className="rounded shadow mt-1 mb-8"
          />
        </article>

        <div>
          <span className="font-bold text-tittle">Botão Menu</span>
          <p className="text-desc">
            Mostra/Esconde todas as opções do Menu, que você pode usar com um
            clique.
          </p>{" "}
          <div className="flex  flex-col">
            <div className="flex items-center justify-center">
              <Image
                src={"/interface/menubar1.avif"}
                width={500}
                height={0}
                alt="Menu de opções"
                className="rounded shadow h-auto mt-1 mb-8"
              />
            </div>
            <ul className="flex flex-col justify-center max-w-md gap-y-2 list-disc px-4 mb-8">
              <li className="text-desc">
                Quando você passar o mouse sobre cada ícone do menu, você verá a
                descrição e a tecla de atalho de cada um.
              </li>
              <li className="text-desc">Shopping de Itens (ALT + E)</li>
              <li className="text-desc">Informações do Personagem (ALT + A)</li>
              <li className="text-desc">Inventário (ALT + V ou ALT + I)</li>
              <li className="text-desc">Skills (ALT + S)</li>
              <li className="text-desc">Quest - Tarefas (ALT + Q)</li>
              <li className="text-desc">Comunidade (ALT + C)</li>
              <li className="text-desc">Informações do Clan (ALT + N)</li>
              <li className="text-desc">Conquistas (ALT + W)</li>
              <li className="text-desc">Informações de PvP (ALT + P)</li>
              <li className="text-desc">Ajuda e Regulmanto (ALT + H)</li>
              <li className="text-desc">Sistema e Opções (ALT + O)</li>
            </ul>
          </div>
          <article>
            <span className="font-bold text-tittle">
              Janela de Inventário (ALT + V ou ALT + I)
            </span>
            <p className="text-desc">
              A janela Inventário mostra todos os itens que você está carregando
              no momento. Esta janela esta organizada em seções:
            </p>{" "}
            <Image
              src={"/interface/inventario.avif"}
              width={1280}
              height={400}
              alt="inventario usuario"
              className="rounded shadow mt-1 mb-8"
            />
            <div className="mt-2 flex flex-col">
              <span className="font-bold text-tittle">Avatar</span>
              <p className="text-desc">Em cima os equipamentos em uso</p>
              <p className="text-desc">
                Abaixo as abas Equipamentos, Itens Consumíveis e Materiais
              </p>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="font-bold text-tittle">Visual</span>
              <p className="text-desc">
                Aqui você pode utilizar itens apenas para aparência, mantendo os
                status dos itens equipados na aba AVATAR
              </p>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="font-bold text-tittle">Veículo</span>
              <p className="text-desc">
                Itens de carros, motos, animais, etc. Acima os itens equipados.
              </p>
              <p className="text-desc">
                Para equipar ou desequipar um item, basta arrastar para o local
                correspondente, ou simplesmente dando um clique duplo no ícone.
              </p>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="font-bold text-tittle">Janela visualizar</span>

              <p className="text-desc">
                Clicando com o botão DIREITO do mouse junto com a tecla CTRL
                sobre um ícone, abre a janela Visualizar, e você poderá como
                ficará o seu char utilizando este item. Esta janela funciona em
                qualquer local, ou seja, em itens em lojas pessoais, no seu
                inventário, nos itens de shopping e nos itens de NPCs.
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/interface/visualizacao.avif"}
                width={1280}
                height={400}
                alt="visualização de itens"
                className="rounded shadow mt-1 mb-8"
              />
            </div>
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Skill (Habilidades) - (ALT + S)
            </span>
            <p className="text-desc">
              A Janela Skills (habilidades) mostra todas as skills que o
              personagem aprendeu. A janela é dividida em 3 seções: Skills
              Básicas, Skills Ativas e Skills Passivas. Você pode distribuir
              seus pontos de skill para a skill que você deseja elevar clicando
              no sinal +. As skills podem ser compradas nos NPCs e em alguns
              casos, caídas de monstros. A skill é um livrinho que vai estar na
              aba Consumível do seu inventário, para aprender basta dar um
              clique duplo no livrinho.
            </p>{" "}
            <Image
              src={"/interface/skills-1.avif"}
              width={1280}
              height={400}
              alt="Janela de skills"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Quest (Tarefas) - (ALT + Q)
            </span>
            <p className="text-desc">
              A janela de Quest (Tarefas) lista todas as quests que estão ativas
              no momento e que ainda não foram concluídas.
              <br /> Você pode ver o número de itens da quest que você tem para
              cada uma nos quadros a esquerda. Clicando no botão Desistir, sua
              quest será cancelada.
            </p>{" "}
            <Image
              src={"/interface/quest.avif"}
              width={1280}
              height={400}
              alt="Janela de quest"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Quest (Tarefas) - (ALT + Q)
            </span>
            <p className="text-desc">
              Nesta janela você pode ver se seus amigos estão online, alterar
              seu status para ajudar seus amigos a saber o que está fazendo no
              momento, por exemplo, se você deixa seu char com loja
              vendendo/comprando itens, você pode mudar o status.
              <br />
              Aba Grupo é muito boa para encontrar Grupos que estejam
              progredindo juntos, ela mostra uma lista de jogadores do seu
              nível, e assim você poderá perguntar se pode participar junto.
            </p>{" "}
            <div className="flex items-center flex-wrap justify-center gap-x-5">
              <Image
                src={"/interface/chat-1.avif"}
                width={300}
                height={400}
                alt="Janela de comunicação"
                className="rounded shadow mt-1 mb-8"
              />
              <Image
                src={"/interface/party.avif"}
                width={300}
                height={400}
                alt="Janela de comunicação"
                className="rounded shadow mt-1 mb-8"
              />
            </div>
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Clan (ALT + N)
            </span>
            <p className="text-desc">
              A janela de Clan só terá informações caso você tenha ou participe
              de algum Clan. Nela você pode checar todas as informações do Clan,
              seus membros e as skills de Clan. Bem como ver as notícias
              publicadas pelo líder do clan.
            </p>{" "}
            <Image
              src={"/interface/clan.avif"}
              width={1280}
              height={400}
              alt="Janela de clan"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Opções do Jogo (ALT + O)
            </span>
            <p className="text-desc">
              Esta janela mostra todas as opções do jogo. Você pode alterar a
              resolução (precisa reiniciar o jogo para ter efeito), volume dos
              sons, controle do modo de ataque (veja mais na aba Caçando),
              opções onde pode aceitar ou rejeitar algumas funções, e o modo que
              deseja utilizar o chat. <br />
              Você pode acessar as opções usando a tecla de atalho ALT+O ou pela
              janela de Sistema e clicando no botão Opções de Jogo.
            </p>{" "}
            <Image
              src={"/interface/options.avif"}
              width={1280}
              height={400}
              alt="Janela de options"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Dados PvP (ALT + P)
            </span>
            <p className="text-desc">
              Esta janela dividida em 3 abas mostra informações das suas
              participações em eventos de batalha Jogador X Jogador (PvP). Na
              aba Pontuação, você acompanha os pontos de Batalhas de Comércio
              PvP e da sua Facção. Na aba Estatísticas vocë acompanha suas
              vitórias e derrotas, inclusive detalhada por cada classe. Na aba
              Eventos, suas vitórias nos eventos PvP do RoseOnBr.
              <br />
              Você pode acessar esta janela usando a tecla de atalho ALT+P ou
              pelo menu principal.
            </p>{" "}
            <Image
              src={"/interface/pvp.avif"}
              width={1280}
              height={400}
              alt="Janela de pvp"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <article>
            <span className="font-bold text-tittle">
              Janela de Saída (ALT + X)
            </span>
            <p className="text-desc">
              Esta janela permite você sair do jogo ou voltar para a tela de
              seleção de personagem ou ir para as Opções do Jogo.
            </p>{" "}
            <Image
              src={"/interface/close.avif"}
              width={1280}
              height={400}
              alt="Janela de saida"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
          <span className="font-bold text-tittle">
            Janela de Bate-Papo (Chat)
          </span>
          <p className="text-desc">
            Divirta-se conversando com outros jogadores enquanto você explora o
            mundo do ROSE.
          </p>{" "}
          <div className="flex  flex-col">
            <div className="flex items-center justify-center">
              <Image
                src={"/interface/chat.avif"}
                width={500}
                height={0}
                alt="chat bate bapo"
                className="rounded shadow h-auto mt-1 mb-8"
              />
            </div>
            <ul className="flex flex-col justify-center gap-y-2 list-disc px-4 mb-8">
              <li className="text-desc">
                <b>Chat para Todos</b>
                <br />
                Possbilita trocar mensagens com as pessoas que estão a uma certa
                distância de você.
              </li>
              <li className="text-desc">
                <b>Grita</b> <br />
                Você pode enviar uma mensagem para todos que estiverem no mesmo
                mapa que você teclando {"'!mensagem'"} na janela de chat. <br />
                Você só pode mandar uma mensagem a cada 20 segundos.
              </li>
              <li className="text-desc">
                <b>Clan</b> <br />
                Troca mensagens apenas com os membros do seu clan. Somente os
                membros podem ver o que é digitado.
              </li>
              <li className="text-desc">
                <b>party</b> <br />
                Conversa apenas entre os jogadores do grupo que está em party.
              </li>
              <li className="text-desc">
                <b>Sussurrar</b> <br />
                Mensagem Privativa pode ser enviada para uma pessoa teclando{" "}
                {'"@NomeDoPersonagem mensagem"'}, na janela de chat.
              </li>
              <li className="text-desc">
                <b>Aliados</b> <br /> Conversa apenas com os seus aliados de
                clan.
              </li>
            </ul>
          </div>
          <article className="mb-20">
            <span className="font-bold text-tittle">Barras de Atalhos</span>
            <p className="text-desc">
              Adicionando Itens e Skills para sua Janela de Atalhos. <br />
              Arraste e solte Skills ou Itens consumíveis para as barras de
              atalhos, para ativar a tecla de atalho. <br />
              Assim, você pode usar a skill ou o consumível apenas pressionando
              as teclas de F1 até F12. <br />
              Na outra barra você utiliza a tecla ALT+F1 a F12.
            </p>{" "}
            <Image
              src={"/interface/skills.avif"}
              width={1280}
              height={400}
              alt="barra de skills"
              className="rounded shadow mt-1 mb-8"
            />
          </article>
        </div>
      </section>
    </SectionContent>
  );
};

export default PageStarting;
