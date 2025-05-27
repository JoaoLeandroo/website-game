import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import Image from "next/image";

const PageBox = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="clan" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-5">
            Sistema de clan
          </h1>
          <span className="font-bold text-xl text-tittle">O que são clãs?</span>
          <p className="text-desc mb-5">
            Os Clãs são grupos sociais criados para jogadores que querem se
            divertir jogando Rose Online Brasil juntos. A entrada em um clã é
            feita somente por convite e você tem acesso a privilégios especiais.
            Como membro de um clã, você pode conversar com outros membros
            independentemente de sua localização, completar missões em grupo e
            enfrentar inimigos em batalhas como uma equipe unida.
          </p>

          <span className="font-bold text-xl text-tittle mt-8">
            Criação de Clã
          </span>
          <p className="text-desc mb-2">
            Para criar um clã, siga os passos necessários e reúna seus amigos
            para começar sua própria aventura em grupo!
          </p>

          <picture>
            <Image
              src={"/freatures/clan.avif"}
              width={1280}
              height={300}
              alt="Criação de clan"
              className="rounded shadow mt-1 mb-2"
            />
          </picture>

          <div className="mb-20">
            <i>
              Após a criação de seu clan, convides os amigos e curtam o jogo
              juntos!
            </i>
          </div>
        </div>
      </section>
    </SectionContent>
  );
};

export default PageBox;
