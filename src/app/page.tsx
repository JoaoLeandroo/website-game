import BannerHome from "@/components/others/BannerHome";
import CardClassesStyle from "@/components/others/CardClassesStyle";
import ContainerMain from "@/components/others/ContainerMain";
import { Bungee } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <BannerHome />
      <div className="h-11 w-full bg-blue-800"></div>
      <ContainerMain>
        <div>

          {/* SECTION PLANETAS */}
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mt-15 mb-24">
            <section className="flex flex-col text-center xl:text-left gap-y-1 w-full max-w-[600px]">
              <h2
                className={`${font.className} font-bold text-3xl gradient-text-yellow drop-shadow-primary`}
              >
                Explore Todos <br /> os Mundos de <br /> ROSE Online Brasil!
              </h2>
              <p className="text-colorText font-[400]">
                Prepare-se para embarcar em uma jornada épica no ROSE Online
                Brasil, um MMORPG gratuito que está no ar há mais de 15 anos,
                oferecendo aventuras inesquecíveis em um universo vasto e
                envolvente.
              </p>
              <span className="text-xl font-semibold text-tittle">
                Descubra 7 Planetas Únicos
              </span>
              <p className="text-colorText font-[400]">
                Seja um dos poucos a explorar todos os sete mundos
                interplanetários disponíveis — uma exclusividade que você só
                encontra aqui!
              </p>
              <Link
                href={"/planets"}
                className="w-full xl:w-[180px] px-3 py-2 hover:cursor-custom-hand hover:opacity-75 text-center rounded-md border border-[#0ff] shadow-md font-semibold bg-[#2979ff] text-[#fff] uppercase"
              >
                Explore Mais!
              </Link>
            </section>
            <picture className="shadow p-2 rounded xl:rounded-bl-full border border-[#2979ff]">
              <Image
                src={"/others/arua.png"}
                width={600}
                height={0}
                alt="teste"
                className="rounded xl:rounded-bl-full w-full md:w-[400px] lg:w-[600px] object-cover"
              />
            </picture>
          </article>

          {/* classes e personalização */}

          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-40">

            <section className="flex flex-col text-center w-full">
              <h3
                className={`${font.className} font-bold text-3xl md:text-5xl mb-10 gradient-text-yellow drop-shadow-primary`}
              >
                Guias e Classes
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <CardClassesStyle href="/others/iniciantes.png" altImg="teste" title="Guia para iniciantes" button="Veja mais" urlButton="/jobs" />
                <CardClassesStyle href="/others/teste3.png" altImg="teste" title="Classes Avançadas" button="Veja mais" urlButton="/jobs" />
                <CardClassesStyle href="/others/economia.png" altImg="teste" title="Economia" button="Veja mais" urlButton="/jobs" />
                <CardClassesStyle href="/others/estilos.png" altImg="teste" title="Estilos" button="Veja mais" urlButton="/jobs" />
                <CardClassesStyle href="/others/pvp.png" altImg="teste" title="Sistema de Combate" button="Veja mais" urlButton="/jobs" />
                <CardClassesStyle href="/others/eventos.png" altImg="teste" title="Eventos" button="Veja mais" urlButton="/jobs" />
              </div>
            </section>

          </article>
        </div>
      </ContainerMain>
    </div>
  );
}
