import AnimationsScroll from "@/components/others/AnimationsScroll";
import BannerHome from "@/components/others/BannerHome";
import CardClassesStyle from "@/components/others/CardClassesStyle";
import ContainerMain from "@/components/others/ContainerMain";
import { Download, Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <BannerHome />
      <div className="h-11 carrousel w-full bg-blue-800 flex gap-x-2 items-center justify-end overflow-hidden">
        <div className="group">
          <div className="flex items-center gap-x-2 card">
            <Swords size={20} color="white" />
            <p className="bg-yellow-100 px-1 text-center rounded shadow-xl text-black hidden lg:block">
              Explore, lute, evolua, divirta-se — Rose Online Brasil te espera!
            </p>
                        <p className="bg-yellow-100 px-1 text-center rounded shadow-xl text-black block lg:hidden">
              Rose Online Brasil te espera!
            </p>
            <Swords size={20} color="white" />
          </div>
        </div>
      </div>
      <ContainerMain>
        <div>
          {/* SECTION PLANETAS */}
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-10 lg:mb-40 mt-10">
            <section className="flex flex-col text-center xl:text-left gap-y-1 w-full max-w-[600px]">
              <h2
                className={`font-bungee font-bold text-3xl gradient-text-yellow drop-shadow-primary`}
              >
                Explore Todos <br /> os Mundos de <br /> ROSE Online Brasil!
              </h2>
              <p className="text-desc font-[400]">
                Prepare-se para embarcar em uma jornada épica no ROSE Online
                Brasil, um MMORPG gratuito que está no ar há mais de 15 anos,
                oferecendo aventuras inesquecíveis em um universo vasto e
                envolvente.
              </p>
              <span className="text-xl font-bold text-tittle mt-2">
                Descubra 7 Planetas Únicos
              </span>
              <p className="text-desc font-[400] mb-2">
                Seja um dos poucos a explorar todos os sete mundos
                interplanetários disponíveis — uma exclusividade que você só
                encontra aqui!
              </p>
              <Link
                href={"guides/questPlanets"}
                className="w-full xl:w-[180px] px-3 py-2 hover:cursor-custom-hand hover:opacity-90 text-center rounded-md shadow-md font-semibold bg-yellow-100 text-black uppercase"
              >
                Explore Mais!
              </Link>
            </section>
            <picture className="shadow p-2 rounded xl:rounded-bl-full select-none border border-[#2979ff]">
              <Image
                src={"/others/arua.avif"}
                width={600}
                height={0}
                alt="Planeta arua"
                className="rounded xl:rounded-bl-full w-full md:w-[400px] lg:w-[600px] object-cover"
              />
            </picture>
          </article>

          {/* classes e gruides */}

          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-24">
            <section className="flex flex-col text-center w-full">
              <h3
                className={`font-bungee font-bold text-3xl md:text-5xl mb-10 gradient-text-yellow drop-shadow-primary`}
              >
                Guias e Classes
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <CardClassesStyle
                  href="/others/iniciando.avif"
                  altImg="Guia para iniciantes"
                  title="Guia para iniciantes"
                  button="Veja mais"
                  urlButton="/guides/starting"
                />
                <CardClassesStyle
                  href="/others/classes.avif"
                  altImg="Guia de classes"
                  title="Classes Avançadas"
                  button="Veja mais"
                  urlButton="/guides/jobs"
                />
                <CardClassesStyle
                  href="/others/economia.avif"
                  altImg="Lojinha off"
                  title="Off Vending"
                  button="Veja mais"
                  urlButton="/freatures/offVending"
                />
                <CardClassesStyle
                  href="/others/estilo.avif"
                  altImg="Interface"
                  title="Interface"
                  button="Veja mais"
                  urlButton="/guides/interfaceScreen"
                />
                <CardClassesStyle
                  href="/others/pvp_.avif"
                  altImg="Sistema PvP"
                  title="Sistema de Combate"
                  button="Veja mais"
                  urlButton="/freatures/pvp"
                />
                <CardClassesStyle
                  href="/others/game-arena.avif"
                  altImg="Sistema Game arena"
                  title="Game Arena"
                  button="Veja mais"
                  urlButton="/freatures/game-arena"
                />
              </div>
            </section>
          </article>
        </div>

        {/* section seasonal events */}
        <AnimationsScroll>
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4">
            <section className="flex flex-col text-center w-full">
              <h4
                className={`font-bungee font-bold text-3xl md:text-5xl mb-10 gradient-text-yellow drop-shadow-primary`}
              >
                Eventos Seasonais
              </h4>

              <div className="w-full max-h-[400px] overflow-hidden">
                <picture className="w-full h-[300px]">
                  <Link
                    href={"/freatures/seasonal-events"}
                    className="w-full cursor-custom-hand"
                  >
                    <Image
                      src={"/others/seasonal-events1.avif"}
                      width={720}
                      height={400}
                      alt="banner seasonal eventos"
                      className="w-full rounded shadow object-contain"
                    />
                  </Link>
                </picture>
              </div>
            </section>
          </article>
        </AnimationsScroll>

        {/* Explore planets */}
        <AnimationsScroll>
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-24 mt-16">
            <picture className="select-none hidden md:block">
              <Image
                src={"/others/Hebarn.avif"}
                width={720}
                height={0}
                alt="Planeta Hebarn"
                className="w-full md:w-[720px] object-cover rounded"
              />
            </picture>
            <section className="flex flex-col text-center xl:text-left gap-y-1 w-full max-w-[600px]">
              <h5
                className={`font-bungee font-bold text-3xl gradient-text-yellow drop-shadow-primary`}
              >
                Explore O fascinante
                <br /> Planeta Hebarn
              </h5>
              <p className="text-desc font-[400]">
                Você vai se maravilhar com todas as belezas do planeta Hebarn —
                um mundo espetacular e único em Rose Online Brasil. <br />
                Prepare-se para enfrentar perigos emocionantes e explorar
                cenários incríveis, cheios de mistério e aventura. Aqui, cada
                local é exclusivo, cada batalha é épica, e cada jornada é
                inesquecível.
              </p>
              <Link
                href={"/guides/download"}
                className="text-black flex justify-center gap-x-2 bg-yellow-100 text-center mt-3 p-3 rounded cursor-custom-hand font-[400]"
              >
                <Download size={20} />
                <p className="hidden lg:block">Baixe o jogo agora e mergulhe neste universo fantástico!</p>
                <p className="block lg:hidden">Download</p>
              </Link>
            </section>
          </article>
        </AnimationsScroll>
      </ContainerMain>
    </div>
  );
}
