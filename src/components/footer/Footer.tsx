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
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-800">
      <ContainerMain>
        <div className="flex flex-wrap justify-between py-10">
          <div className="flex flex-col h-ful">
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
          <section className="flex gap-x-16 text-white">
            <div className="flex flex-col gap-y-2">
              <span className="flex gap-x-1 items-center text-lg mb-2">
                <Paperclip size={15} /> Acesso direto
              </span>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <House size={15} />
                Home
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <Download size={15} />
                Download
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <CreditCard size={15} />
                Doação
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <User size={15} />
                Criar Conta
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                <Pencil size={15} />
                Editar Conta
              </Link>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="flex gap-x-1 items-center text-lg mb-2">
                <Computer size={15} /> Sobre o Jogo
              </span>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Primeiros Passos
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Controles
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Classes
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Como jogar
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Char Status
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Skills
              </Link>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="flex gap-x-1 items-center text-lg mb-2">
                <NotebookText size={15} /> Regulamento e Regras
              </span>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Regulamento
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Dicas de Segurança
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Boas Praticas
              </Link>
              <Link
                className="text-xs flex gap-x-1 items-center cursor-custom-hand hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Dicas
              </Link>
            </div>
          </section>

          <div>
            <p>
              <Users size={15} /> Redes sociais
            </p>
          </div>
        </div>
      </ContainerMain>
    </footer>
  );
};

export default Footer;
