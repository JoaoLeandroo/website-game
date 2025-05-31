import BannerHome from "@/components/others/BannerHome";
import CardClassesStyle from "@/components/others/CardClassesStyle";
import ContainerMain from "@/components/others/ContainerMain";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <BannerHome />
      <div className="h-11 w-full bg-blue-500 flex gap-x-2 items-center justify-center">
        <Link
          target="_blank"
          href={"https://discord.com/invite/4kAksB4"}
          className="cursor-custom-hand hover:opacity-75 transition duration-200"
        >
          <FaDiscord size={30} color="white" />
          <div className="sr-only">Botão Discord</div>
        </Link>
        <Link
          target="_blank"
          href={"https://www.youtube.com/channel/UCPOC50J6h-UAOn9qgvKjB-w"}
          className="cursor-custom-hand hover:opacity-75 transition duration-200"
        >
          <FaYoutube size={30} color="white" />
          <div className="sr-only">Botão youtube</div>
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.facebook.com/people/RoseOn-Brasil/100089315821480/"
          }
          className="cursor-custom-hand hover:opacity-75 transition duration-200"
        >
          <FaFacebook size={23} color="white" />
          <div className="sr-only">Botão Facebook</div>
        </Link>
      </div>
      <ContainerMain>
        <div>
          {/* SECTION PLANETAS */}
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-40 mt-10">
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
              <span className="text-xl font-semibold text-tittle">
                Descubra 7 Planetas Únicos
              </span>
              <p className="text-desc font-[400]">
                Seja um dos poucos a explorar todos os sete mundos
                interplanetários disponíveis — uma exclusividade que você só
                encontra aqui!
              </p>
              <Link
                href={"guides/questPlanets"}
                className="w-full xl:w-[180px] px-3 py-2 hover:cursor-custom-hand hover:opacity-75 text-center rounded-md border border-[#0ff] shadow-md font-semibold bg-[#2979ff] text-[#fff] uppercase"
              >
                Explore Mais!
              </Link>
            </section>
            <picture className="shadow p-2 rounded xl:rounded-bl-full select-none border border-[#2979ff]">
              <Image
                src={"/others/arua.avif"}
                width={600}
                height={0}
                alt="teste"
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
      </ContainerMain>
      {/* Eventos Seasonais */}

      <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mb-14">
        <section className="flex flex-col text-center w-full">
          <h4
            className={`font-bungee font-bold text-3xl md:text-5xl mb-10 gradient-text-yellow drop-shadow-primary`}
          >
            Eventos Seasonais
          </h4>

          <div className="w-full h-[600px]">
            <Link
              href={"/freatures/seasonal-events"}
              className="w-full cursor-custom-hand"
            >
              <Image
                src={"/others/seasonal-events1.avif"}
                width={1920}
                height={700}
                alt="banner seasonal eventos"
                className="w-full rounded shadow"
              />
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
