import Link from "next/link";
import ContainerMain from "../others/ContainerMain";
import Image from "next/image";
import {
  Paperclip,
  Computer,
  NotebookText,
  Users,
  House,
  Download,
  CreditCard,
  Pencil,
  User,
  Swords,
  MonitorCog,
  PersonStanding,
  BookOpenText,
  Lightbulb,
  ThumbsUp,
} from "lucide-react";
import { FaDiscord, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800">
      <ContainerMain>
        <div className="flex flex-wrap flex-col px-3 md:px-0 md:flex-row gap-y-5 justify-between py-8">
          <div className="flex flex-col w-full md:max-w-[190px] h-ful">
            <Image
              src={"/assets/RoseOnline_Logo.png"}
              width={60}
              height={60}
              alt="Logo Rose Online Brasil"
              className="select-none"
            />
            <p className="text-white mt-2 text-xs">
              &copy; {new Date().getFullYear()} RoseOnlineBrasil. <br /> Todos
              os direitos reservados.
            </p>
          </div>
          <section className="flex gap-x-8 flex-col md:flex-row text-white">
            <div className="flex flex-col gap-y-1">
              <p className="flex gap-x-1 text-white font-bold items-center mb-1">
                <Paperclip size={15} /> Acesso direto
              </p>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <House size={15} />
                Home
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/guides/download"}
              >
                <Download size={15} />
                Download
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/donate/login"}
              >
                <CreditCard size={15} />
                Doação
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/auth/createAccount"}
              >
                <User size={15} />
                Criar Conta
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/auth/login"}
              >
                <Pencil size={15} />
                Editar Conta
              </Link>
            </div>

            <div className="flex flex-col gap-y-1">
              <p className="flex gap-x-1 text-white font-bold items-center mb-1">
                <Computer size={15} /> Sobre o Jogo
              </p>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/guides/starting"}
              >
                <Swords size={15} /> Primeiros Passos
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/guides/interfaceScreen"}
              >
                <MonitorCog size={15} /> Controles
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/guides/jobs"}
              >
                <PersonStanding size={18} /> Classes
              </Link>
            </div>

            <div className="flex flex-col gap-y-1">
              <p className="flex gap-x-1 text-white font-bold items-center mb-1">
                <NotebookText size={15} /> Regulamento e Regras
              </p>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/rules/rules"}
              >
                <BookOpenText size={15} /> Regulamento
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/rules/security"}
              >
                <Lightbulb size={15} /> Dicas de Segurança
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/rules/pratices"}
              >
                <ThumbsUp size={15} /> Boas Praticas
              </Link>
            </div>
          </section>

          <div className="text-white font-bold flex flex-col items-baseline">
            <p className="flex gap-x-1 items-center justify-center mb-2">
              <Users size={15} /> Redes sociais
            </p>
            <div className="flex gap-x-2 items-center">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/people/RoseOn-Brasil/100089315821480/"
                }
              >
                <FaFacebook
                  size={24}
                  className="cursor-custom-hand hover:opacity-85 hover:scale-105"
                />
                <span className="sr-only">Link para acessar facebook</span>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.youtube.com/channel/UCPOC50J6h-UAOn9qgvKjB-w"
                }
              >
                <FaYoutube
                  size={30}
                  className="cursor-custom-hand hover:opacity-85 hover:scale-105"
                />
                <span className="sr-only">Link para acessar youtube</span>
              </Link>
              <Link target="_blank" href={"https://discord.com/invite/4kAksB4"}>
                <FaDiscord
                  size={30}
                  className="cursor-custom-hand hover:opacity-85 hover:scale-105"
                />
                <span className="sr-only">Link para acessar discord</span>
              </Link>
            </div>
          </div>
        </div>
      </ContainerMain>
    </footer>
  );
};

export default Footer;
