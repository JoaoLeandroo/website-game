import Image from "next/image";
import ContainerMain from "../others/ContainerMain";
import Link from "next/link";
import { Button } from "../ui/button";
import FreatureMenuBar from "./FreatureMenuBar";
import GuidesMenuBar from "./GuidesMenuBar";
import CommunityMenuBar from "./CommunityMenuBar";

const NavBar = () => {
  return (
    <header className="bg-blue-800 sticky top-0 z-50 text-textBase shadow">
      <ContainerMain>
        <nav className="w-full h-16 flex justify-between items-center">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/assets/RoseOnline_Logo.png"}
              width={90}
              height={90}
              alt="Logo Rose Online Brasil"
              title="Rose Online Brasil"
              className="mt-4 cursor-custom-hand"
            />
          </Link>

          {/* conteudo */}
          <div className="hidden lg:flex gap-x-4 text-md items-center justify-center">
            <Link href={"/"} className="cursor-custom-hand">Home</Link>
            <Link href={"/donation/login"} className="cursor-custom-hand">Donate</Link>
            <GuidesMenuBar />
            <FreatureMenuBar />
            <CommunityMenuBar/>
            <Link href={"/Downloads/download"}>
              <Button className="bg-[#FFEB3B] hover:bg-[#ffeb3bdb] text-[#1A1A1A] cursor-custom-hand">
                Download
              </Button>
            </Link>
          </div>

          {/* auth */}
          <div className="flex gap-x-2">
            <Link href={"/Account/login"}>
              <Button className="cursor-custom-hand">Login</Button>
            </Link>
            <Link href={"/Account/createAccount"}>
              <Button className="cursor-custom-hand">Register</Button>
            </Link>
          </div>
        </nav>
      </ContainerMain>
    </header>
  );
};

export default NavBar;
