import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const FreatureMenuBar = () => {
  return (
    <Menubar className="bg-transparent p-0 border-none ">
      <MenubarMenu>
        <MenubarTrigger className="flex items-center justify-center cursor-custom-hand">
          Freature <MdKeyboardArrowDown size={20} />
        </MenubarTrigger>
        <MenubarContent className="bg-blue-800 border-none text-white">
          <Link href={"/freatures/craft"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Craft
            </MenubarItem>
          </Link>
          <Link href={"/freatures/collector"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Collector
            </MenubarItem>
          </Link>
          <Link href={"/freatures/box"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Sistema de Box
            </MenubarItem>
          </Link>
          <Link href={"/freatures/clan"}>
            <MenubarItem className="hover:cursor-custom-hand">Sistema de Clans</MenubarItem>
          </Link>
          <Link href={"/freatures/refines"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Refines
            </MenubarItem>
          </Link>
          <Link href={"/freatures/quick-switch"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Quick Switch
            </MenubarItem>
          </Link>
          <Link href={"/freatures/offVending"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Off Vending
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default FreatureMenuBar;
