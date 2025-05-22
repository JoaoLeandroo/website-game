import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const CommunityMenuBar = () => {
  return (
    <Menubar className="bg-transparent p-0 border-none ">
      <MenubarMenu>
        <MenubarTrigger className="flex items-center justify-center cursor-custom-hand">
          Comunidades <MdKeyboardArrowDown size={20} />
        </MenubarTrigger>
        <MenubarContent className="bg-blue-800 border-none text-white">
          <Link href={"/guides/"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Discord
            </MenubarItem>
          </Link>
          <Link href={"/guides/"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Youtube
            </MenubarItem>
          </Link>
          <Link href={"/guides/"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Instagram
            </MenubarItem>
          </Link>
          <Link href={"/guides/"}>
            <MenubarItem className="hover:cursor-custom-hand">
              Facebook
            </MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default CommunityMenuBar;
