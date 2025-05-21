import Image from "next/image";
import ContainerMain from "../others/ContainerMain";
import Link from "next/link";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <header className="bg-blue-800 sticky top-0 z-50 text-textBase shadow">
      <ContainerMain>
        <nav className="w-full h-16 flex justify-between items-center">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/assets/RoseOnline_Logo.png"}
              width={70}
              height={70}
              alt="Logo Rose Online Brasil"
            />
          </Link>

          {/* conteudo */}
          <div className="flex gap-x-4 text-md items-center justify-center">
            <Link href={"#"}>Guides</Link>
            <Link href={"#"}>Freature</Link>
            <Link href={"#"}>Item Mall</Link>
            <Link href={"#"}>Comunidade</Link>
            <Link href={"#"}>Donate</Link>
            <Link
              href={"/download"}
            >
              <Button className="bg-[#FFEB3B] hover:bg-[#ffeb3bdb] text-[#1A1A1A] cursor-custom-hand">Download</Button>
            </Link>
          </div>

          {/* auth */}
          <div className="flex gap-x-2">
            <Link href={"/session"}>
              <Button className="cursor-custom-hand">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="cursor-custom-hand">Register</Button>
            </Link>
          </div>
        </nav>
      </ContainerMain>
    </header>
  );
};

export default NavBar;
