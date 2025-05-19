import { Bungee } from "next/font/google";
import ContainerMain from "@/components/others/ContainerMain";
import Image from "next/image";

const font = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <section className="w-full h-[420px] relative overflow-hidden">
        <Image
          src={"/3.jpg"}
          width={3080}
          height={2320}
          alt="background teste"
          className="absolute top-0 h-full object-cover select-none opacity-80 -z-20"
        />
          <Image
          src={"/persons/chara_mage.png"}
          width={400}
          height={0}
          alt="personagem"
          className="absolute top-0 h-full object-cover select-none -z-10"
        />
        <Image
          src={"/persons/chara_soldier.png"}
          width={300}
          height={0}
          alt="personagem"
          className="absolute top-0 right-0 h-full object-cover select-none -z-10"
        />
        <ContainerMain>
          <div className="w-full flex items-center justify-center h-[320px] flex-col">
            <h1 className={`${font.className} text-5xl text-center drop-shadow-primary gradient-text-yellow `}>
              Bem vindo ao <br /> Rose Online Brasil
            </h1>
            <p className="text-white drop-shadow-primary font-bold">Celebrando 15 anos de aventuras online.</p>
            <p className="text-white drop-shadow-primary font-bold">Aqui, sua diversão é coisa séria!</p>
          </div>
        </ContainerMain>
      </section>
      <div className="h-[1000px]">
        <ContainerMain>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          aspernatur porro incidunt ipsam officiis deserunt molestiae quidem
          necessitatibus possimus animi qui eos tenetur nihil odit, laboriosam
          numquam et eveniet. Illum.
        </ContainerMain>
      </div>
    </div>
  );
}
