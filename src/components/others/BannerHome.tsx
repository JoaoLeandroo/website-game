"use client";
import { Bungee } from "next/font/google";
import ContainerMain from "@/components/others/ContainerMain";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const font = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const BannerHome = () => {
  return (
    <section className="w-full h-[320px] md:h-[420px] relative overflow-hidden">
      <Image
        src={"/4.jpg"}
        width={3080}
        height={2320}
        alt="background teste"
        className="absolute top-0 h-full object-cover select-none bg-blue-800 opacity-85 -z-20"
      />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={"/persons/chara_mage.png"}
          width={400}
          height={0}
          alt="personagem"
          className="h-auto hidden sm:block absolute -z-10 drop-shadow-secundary"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={"/persons/chara_striker.png"}
          width={420}
          height={0}
          alt="personagem"
          className="h-auto hidden sm:block absolute right-0 -z-10 drop-shadow-thirdy"
        />
      </motion.div>
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
            className={`${font.className} text-5xl text-center drop-shadow-primary gradient-text-yellow select-none`}
          >
            Bem vindo ao <br /> Rose Online Brasil
          </h1>
          <p className="text-white drop-shadow-primary font-bold select-none">
            Celebrando 15 anos de aventuras online.
          </p>
          <p className="text-white drop-shadow-primary font-bold select-none">
            Aqui, sua diversão é coisa séria!
          </p>

          <Link href={"/downloads/download"} className="hover:cursor-custom-hand">
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
