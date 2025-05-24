import AnimationLetters from "@/components/others/AnimationsLetters";
import ContainerMain from "@/components/others/ContainerMain";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TableDownload } from "@/components/others/TableDownload";


const PageDownload = () => {
  return (
    <ContainerMain>
      <div>
        <Image src={"/persons/chara_archer.png"} width={450} height={400} alt="mage" className="absolute -z-50 right-0 bottom-0"/>
        <Image src={"/persons/chara_mage.png"} width={450} height={400} alt="mage" className="absolute hidden lg:block -z-50 left-0"/>
        <AnimationLetters>
          <section className="w-full mt-16 flex flex-col items-center justify-center max-w-[600px] text-center mx-auto">
            <h1
              className={`font-bungee text-3xl drop-shadow-primary gradient-text-yellow`}
            >
              Baixe Agora Rose Online Brasil
            </h1>
            <p className="text-desc font-[400]">
              Antes de baixar o cliente do jogo, certifique-se de que seu
              computador atende aos requisitos de sistema.
            </p>

            <div className="w-full flex border hover:border-emerald-300 transition duration-200 bg-blue-100 px-6 py-3 flex-col justify-between h-[170px] rounded shadow mt-6">
              <picture className="flex items-center gap-x-2">
                <Image
                  src={"/assets/RoseOnline_Logo.png"}
                  width={60}
                  height={70}
                  alt="Logo RoseonlineBrasil"
                  className="select-none"
                />
                <div className="text-left">
                  <p className="text-desc font-[500]">
                    Launcher Rose Online Brasil
                  </p>
                  <span className="text-colorText font-[400] text-xs">
                    V2025.35
                  </span>
                </div>
              </picture>

              <div className="flex-col">
                <div className="w-full flex justify-between text-desc font-[400] text-sm">
                  <span>Tamanho:</span>
                  <span>2.4 GB</span>
                </div>
                <Button className="cursor-custom-hand w-full h-12">
                  <Download size={20} /> download
                </Button>
              </div>
            </div>
          </section>
        </AnimationLetters>

        <section className="mt-10 mb-8">
          <TableDownload />
        </section>
      </div>
    </ContainerMain>
  );
};

export default PageDownload;
