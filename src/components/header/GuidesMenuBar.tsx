import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const GuidesMenuBar = () => {
  return (
    <Menubar className="bg-transparent p-0 border-none ">
      <MenubarMenu>
        <MenubarTrigger className="flex items-center justify-center cursor-custom-hand">
          Guias <MdKeyboardArrowDown size={20} />
        </MenubarTrigger>
        <MenubarContent className="bg-blue-800 border-none text-white">
          <Link href={"/guides/starting"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Guia para Iniciantes
            </MenubarItem>
          </Link>
          <Link href={"/guides/questPlanets"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Quests Planetarias
            </MenubarItem>
          </Link>
          <Link href={"/guides/interfaceScreen"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Interface
            </MenubarItem>
          </Link>
          <Link href={"/guides/jobs"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Classes
            </MenubarItem>
          </Link>
          <Link href={"/guides/ranking"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Rankings
            </MenubarItem>
          </Link>
          <Link href={"/guides/download"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Download
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default GuidesMenuBar;
