"use client";
import { Bungee } from "next/font/google";
import ContainerMain from "@/components/others/ContainerMain";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

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
          className="h-auto absolute -z-10 drop-shadow-secundary"
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
          className="h-auto absolute right-0 -z-10 drop-shadow-thirdy"
        />
      </motion.div>
      <ContainerMain>
        <motion.div
          initial={{ scale: 0.5 }}
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

          <Link href={"/download"}>
            <button className="bg-primary px-7 py-3 rounded-full font-bold border text-white mt-2 uppercase">
                Download
            </button>
          </Link>
        </motion.div>
      </ContainerMain>
    </section>
  );
};

export default BannerHome;
