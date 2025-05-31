"use client";
import ContainerMain from "@/components/others/ContainerMain";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";


const BannerHome = () => {
  return (
    <section className="w-full h-[320px] md:h-[420px] relative overflow-hidden">
      <Image
        src={"/banner_5.avif"}
        width={2560}
        height={900}
        alt="background home"
        priority
        className="absolute top-0 h-full object-cover select-none opacity-90 bg-blue-800 -z-20"
      />
      <div
      >
        <Image
          src={"/persons/chara_mage.png"}
          width={400}
          height={0}
          alt="personagem"
          className="h-auto hidden sm:block absolute -z-10 personStart"
        />
      </div>
      <div
      >
        <Image
          src={"/persons/chara_archer.png"}
          width={420}
          height={0}
          alt="personagem"
          className="h-auto hidden sm:block absolute right-0 -z-10 personStart"
        />
      </div>
      <ContainerMain>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 1.5 },
          }}
          className="w-full flex items-center justify-center h-[320px] flex-col"
        >
          <h1
            className={`font-bungee text-5xl text-center drop-shadow-primary gradient-text-yellow select-none`}
          >
            Bem vindo ao <br /> Rose Online Brasil
          </h1>
          <p className="text-white drop-shadow-primary font-bold select-none">
            Celebrando 15 anos de aventuras online.
          </p>
          <p className="text-white drop-shadow-primary font-bold select-none">
            Aqui, sua diversão é coisa séria!
          </p>

          <Link href={"/Downloads/download"} className="hover:cursor-custom-hand">
            <button className="flex gap-x-2 btn neon-pulse rounded-full text-white mt-4 uppercase">
                Jogue Gratis! <FaDownload size={20}/>
            </button>
          </Link>
        </motion.div>
      </ContainerMain>
    </section>
  );
};

export default BannerHome;
