import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import SectionContent from "@/components/others/SectionContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Terms = () => {
  return (
    <SectionContent>
      <div className="mt-5">
        <BreadcrumbPages namePage="Termos de uso" />
      </div>
      <section className="flex flex-col px-4 lg:px-10">
        <h1 className="font-bungee gradient-text-yellow drop-shadow-primary text-2xl mt-12">
          Termos de Serviço e Uso
        </h1>
        <p className="text-desc mt-2">
          Você é o responsável por qualquer ação feita no decorrer do uso deste
          jogo. Se sua ação violar qualquer lei federal do país onde reside,
          você será o responsável e responderá por sua ação. Você deverá usar
          este jogo conforme regras e determinações impostas pelos
          administradores. Qualquer violação nestas regras resultará em uma
          punição. Nós temos total direito de negar acesso ao nosso jogo a
          qualquer momento e pelo motivo que julgarmos procedente e você deverá
          aceitar estes termos e as regras para usar este jogo. O administador
          poderá banir um jogador do nosso servidor caso julgue necessário mesmo
          que o mesmo seja colaborador ou doador para receber de cash. O fato do
          jogador ter doado para receber cash, não lhe dá direito de infringir
          nenhuma das regras do servidor e estará sujeito as punições cabíveis
          como qualquer outro jogador. Os cashs são dados ao jogador como brinde
          de sua doação. O RoseOnBr e seus administradores não tem obrigação de
          efetuar a devolução da doação seja qualquer motivo. A doação é
          facultativa e não reembolsável, mesmo em caso de fim de atividade do
          jogo. Se alguma informação for retirada deste jogo para qualquer
          empresa ou entidade, você estará violando os termos de uso aceitos
          para uso deste jogo.
        </p>

        <h2 className="text-tittle font-semibold text-xl mt-2">
          Aviso de Uso Pessoal
        </h2>

        <p className="text-desc mt-2">
          Aceitando os termos e regras de uso você será bem vindo ao nosso jogo.
          Ao instalar o Rose Online Brasil em seu computador, você estará
          aceitando os termos de uso e regras de conduta determinadas pelo
          administrador do RoseOnBr que se encontra em nosso site. A instalação
          e utilização deste jogo é de inteira responsabilidade sua, sendo você
          o responsável legal por essa ação.
        </p>

        <i className="text-xs mt-2 text-desc">
          Todas as marcas que por ventura estiverem sendo utilizadas neste jogo,
          são de seus respectivos donos.
        </i>

        <Link href={"/auth/createAccount"} className="cursor-custom-hand">
          <Button className="cursor-custom-hand max-w-xs bg-green-600 hover:bg-green-700 transition duration-300 mb-20 mt-8 h-14 rounded shadow">
            Li e concordo
          </Button>
        </Link>
      </section>
    </SectionContent>
  );
};

export default Terms;
