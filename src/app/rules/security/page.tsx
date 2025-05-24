import SectionContent from "@/components/others/SectionContent";
import Link from "next/link";

const Security = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 lg:px-10">
        <div className="mt-12">
          <h1 className="text-2xl font-bungee gradient-text-yellow drop-shadow-primary">
            Sobre Segurança
          </h1>
        </div>

        <ol className="list-decimal flex flex-col gap-y-3 mt-10 mb-20">
          <li>
            <p className="text-desc">
              Não dê seu login e senha para ninguém. Isto serve também para
              fóruns, sites e contas de jogos. Não divulgue em hipótese alguma
              seu nome de usuário, sua senha de acesso, caixa de e-mails, etc.
              Senhas de acesso são pessoais e intransferíveis. Mantenha essas
              informações sempre em segredo e não as compartilhe com ninguém.
              Lembre-se: dividir a conta com outras pessoas é contra as nossas
              Regras.{" "}
              <b className="font-[600]">
                Os GMs e o ADM nunca perguntarão sua senha.
              </b>
            </p>
          </li>
          <li>
            <p className="text-desc">
              Não compartilhe sua conta. Isto significa dar as informações da
              sua conta, então não faça isto. GMs banirão sua conta por
              compartilhá-la.
            </p>
          </li>
          <li>
            <p className="text-desc">
              Quando criar uma conta e senha, não use seu nome, nome do
              personagem, número de telefone, data de aniversário, etc...
              <br />
              Aqui estão dicas de como criar uma boa senha:{" "}
              <Link
                className="text-blue-400 cursor-custom-hand hover:opacity-75"
                target="_blank"
                href={
                  "https://www.tecmundo.com.br/seguranca/4664-o-guia-definitivo-para-criar-senhas-seguras.htm"
                }
              >
                Acese o link.
              </Link>
              <br />E aqui você pode verificar se você tem uma boa senha:{" "}
              <Link
                className="text-blue-400 cursor-custom-hand hover:opacity-75"
                target="_blank"
                href={"https://testedesenha.com.br/"}
              >
                Acese o link.
              </Link>
            </p>
          </li>
          <li>
            <p className="text-desc">
              Evite acessar estes serviços em locais públicos (Lan-houses). A
              segurança destes locais pode ser facilmente comprometida por
              programas maliciosos que podem roubar seus dados. Acesse estes
              serviços somente de computadores confiáveis.
            </p>
          </li>
          <li>
            <p className="text-desc">
              Cuidado ao receber arquivos através de e-mails e mensagens
              instantâneas. Tais arquivos podem conter códigos maliciosos que
              monitoram tudo o que é digitado - os famosos keylogers. Cuidado
              também ao navegar em sites de mensagens e {"'redes sociais'"},
              pois muitos destes aplicativos são facilmente difundidos através
              deles. Na dúvida, rejeite qualquer arquivo e prefira usar
              navegadores seguros. O fato é que estes arquivos são Keyloggers,
              isto é, eles irão pegar seu login e senha e roubar sua conta e
              você será banido por usar arquivos ilegais e programas de
              terceiros.
            </p>
          </li>

          <li>
            <p className="text-desc">
              Cuidado ao receber arquivos através de e-mails e mensagens
              instantâneas. Tais arquivos podem conter códigos maliciosos que
              monitoram tudo o que é digitado - os famosos keylogers. Cuidado
              também ao navegar em sites de mensagens e {"'redes sociais'"},
              pois muitos destes aplicativos são facilmente difundidos através
              deles. Na dúvida, rejeite qualquer arquivo e prefira usar
              navegadores seguros. O fato é que estes arquivos são Keyloggers,
              isto é, eles irão pegar seu login e senha e roubar sua conta e
              você será banido por usar arquivos ilegais e programas de
              terceiros.
            </p>
          </li>

          <li>
            <p className="text-desc">
              Fique longe das coisas ilegais. Alguns jogadores vão lhe fazer
              propostas pra dupar um item, comprar zuly deles com dinheiro de
              verdade, etc... Você será banido se aceitar, até mesmo se receber
              um item roubado de outro jogador de graça.
            </p>
          </li>

          <li>
            <p className="text-desc">
              Se você tirar uma Screenshot (foto da tela [SS]) do seu Baú
              (storage), tenha certeza de apagar da imagem o seu nome de usuário
              (ele aparece na parte de cima da janela do storage) antes de
              postá-la em um fórum ou mandar para um amigo.
            </p>
          </li>

          <li>
            <p className="text-desc">
              Cuidado redobrado com a URL (endereço do site). O visual dos sites
              pode ser {'"clonado"'}, sendo possível criar sites parecidos com
              os oficiais e endereço de acesso similar com a finalidade de
              enganar as pessoas. Esta prática é conhecida como phishing e a
              melhor forma de se proteger deste tipo de golpe é ficar atento à
              URL. O endereço dos links aparece sempre na barra de status do
              navegador (localizado normalmente na parte inferior da janela),
              enquanto o endereço em acesso atual é mostrado na barra de
              endereços (localizado normalmente na parte superior da janela). Se
              o site que estiver acessando omitir ou de qualquer forma esconder
              uma destas informações, feche a janela imediatamente e interrompa
              o uso daquele serviço. Acesse o site do Rose Online Brasil apenas
              através do endereço:{" "}
              <Link
                className="text-blue-400 cursor-custom-hand hover:opacity-75"
                href={"/"}
              >
                www.roseonline.com.br
              </Link>{" "}
            </p>
          </li>

          <li>
            <p className="text-desc">
              Atente para a extensão dos arquivos que recebe e/ou baixa da
              internet. Arquivos de extensão .exe, .com, .scr., .cmd, .bat, .jar
              e .vbs, entre outros, são arquivos executáveis que podem instalar
              aplicativos maliciosos em seu PC sem a sua autorização.
            </p>
          </li>

          <li>
            <p className="text-desc">
              No caso de estações em funcionamento com Windows XP, Windows
              Vista, Windows 2000 ou Windows 2003, utilize contas de perfil
              administrativo somente com fins administrativos. Separe uma conta
              de usuário normal (limitado) para jogar e navegar na internet.
            </p>
          </li>

          <li>
            <p className="text-desc">
              Mantenha seu PC protegido com software antivírus e firewall.
            </p>
          </li>

          <li>
            <p className="text-desc">
              <b className="text-red-500">
                NUNCA PASSE SEU USUÁRIO OU SENHA para nehum GM ou até mesmo para
                o ADM.
              </b>{" "}
              Se algum jogador disser para você que é um GM ou ADM e que sua
              conta está com problema e precisa da sua senha, não passe, anote o
              nome do personagem que te pediu e envie-nos, pois trata-se de
              golpe para te roubar.
            </p>
          </li>
          <i className="mt-5 font-[600] text-tittle">As informações podem ser modificadas a qualquer momento sem aviso prévio.</i>
        </ol>
      </section>
    </SectionContent>
  );
};

export default Security;
