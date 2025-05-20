import BannerHome from "@/components/others/BannerHome";
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
          <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-4 mt-15 mb-40">
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
        </div>
      </ContainerMain>
    </div>
  );
}
