import SectionContent from "@/components/others/SectionContent";

const Rules = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 lg:px-10">
        <h1 className="font-bungee text-2xl drop-shadow-primary gradient-text-yellow mt-12">
          Regras e Regulamento
        </h1>
        <p className="text-tittle">
          Ao instalar o Rose Online Brasil, o usuário estará automaticamente
          aceitando as seguintes regras, e as que a administração achar
          necessária.
        </p>

        <ul className="list-disc mt-10 mb-20 flex flex-col gap-y-4">
          <li className="text-tittle font-[400]">
            O jogador é o responsável por sua conta e senha e deverá guardá-la
            de maneira segura e nunca passar para terceiros.
          </li>
          <li className="text-tittle font-[400]">
            Fornecer conta e senha para outros jogadores não os exime das
            responsabilidades, e qualquer ato que venha ocorrer que vá contra as
            regras, a conta será punida, ou seja, se você ignorar o item A e
            emprestar sua conta para outra pessoa e está pessoa fizer algo
            contra o regulamento, a conta será banida mesmo não tendo sido você
            que tenha infringido a regra..
          </li>
          <li className="text-tittle font-[400]">
            Compartilhar conta e senha com outros jogadores não é permitido pelo
            servidor, como foi dito no item A, não nos responsabilizamos por
            itens ou zuly que venham a desaparecer, ou personagem deletado.
          </li>
          <li className="text-tittle font-[400]">
            O servidor armazena as senhas criptografadas, portanto, mesmo que
            haja invasão, nunca será possível descobrir as senhas. Em caso de
            roubo de conta, o servidor não se responsabilizará por nenhum item
            ou zuly retirado da conta. Usem senha e login fortes, não
            compartilhem conta, não usem senhas fáceis. O Rose Online Brasil
            utiliza dos meios mais modernos para garantir a segurança de sua
            conta, faça o mesmo e não terá problemas com roubos.
          </li>
          <li className="text-tittle font-[400]">
            O comércio de contas e itens de jogo entre jogadores através de
            moeda corrente de qualquer país são considerados ilegais pela
            adminsitração do servidor. Portanto não o faça pois a punição é o
            bloqueio permanente da conta.
          </li>
          <li className="text-tittle font-[400]">
            O fato do jogador ter feito doação e ter recebido cash não o exime
            das regras do servidor. Todas as punições podem e serão aplicadas a
            esses jogadores. Portanto se você tem item de cash este é mais um
            motivo para guardar bem seu login e senha, nunca compartilhar a
            conta e seguir as regras e regulamentos do Rose Online Brasil.
          </li>
          <li className="text-tittle font-[400]">
            O Cash para compra de itens especiais no jogo, é recebido pelo
            jogador através de doação, não cabendo ao jogador reclamar
            devolução, seja por conta banida, ou qualquer outro motivo. Para se
            jogar o Rose Online Brasil não é necessário pagar nada, e pode-se
            chegar ao nível máximo e usufruir de todos os recursos normais do
            jogo sem necessidade de Cash, portanto a{" "}
            <b className="text-tittle font-[600]">
              {" "}
              Doação para receber Cash é facultativa e não reembolsável.
            </b>
          </li>
          <li className="text-tittle font-[400]">
            O jogador é o responsável por sua conta e senha e deverá guardá-la
            de maneira segura e nunca passar para terceiros.
          </li>
          <li className="text-tittle font-[400]">
            É EXPRESSAMENTE PROIBIDO a re-venda de cash (dinheiro virtual para
            compras de itens virtuais no shopping do servidor) por dinheiro
            real. O anúncio de venda no jogo, fórum ou qualquer outro meio e a
            compra de cash de terceiros ocasionará o bloqueio permanente da
            conta. A venda e compra de cash com segurança é possível apenas no
            site do servidor Rose Online Rose Online Brasil.{" "}
            <b className="text-tittle font-[600]">
              NUNCA COMPRE CASH DE TERCEIROS, VOCÊ SERÁ BANIDO e corre o risco
              de cair num golpe ficar sem dinheiro e nunca receber o cash.
            </b>{" "}
            <br />
            <i>
              Obs: Somente as moedas de Rose Cash poderão ser vendidas no jogo
              por Zuly, mas nunca por dinheiro.
            </i>
          </li>
          <li className="text-tittle font-[400]">
            Em caso de queda do servidor, seja qual for o motivo, que ocasione o
            rollback do personagem, o Rose Online Brasil não tem a obrigação de
            repor os itens, zuly, compras ou qualquer mudança no personagem
            devido ao problema. O Rose Online Brasil não se responsabiliza por
            qualquer perda ocasionada pelo jogador e em casos de problemas
            técnicos ou de mau uso do jogador.
          </li>
          <i className="text-tittle">As responsabilidades poderão ser modificadas a qualquer momento sem aviso prévio.</i>
        </ul>
      </section>
    </SectionContent>
  );
};

export default Rules;
