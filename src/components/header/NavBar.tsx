import Image from "next/image";
import ContainerMain from "../others/ContainerMain";
import Link from "next/link";

const NavBar = () => {
    return ( 
        <header className="bg-primary sticky top-0 z-50 font-semibold shadow">
            <ContainerMain>
                <nav className="w-full h-14 flex justify-between items-center">
                    {/* logo */}
                    <Link href={"/"}>
                        <Image src={"/assets/RoseOnline_Logo.png"} width={70} height={70} alt="Logo Rose Online Brasil"/>
                    </Link>

                    {/* conteudo */}
                    <div className="flex gap-x-2">
                        <Link href={"#"}>Guides</Link>
                        <Link href={"#"}>Donate</Link>
                        <Link href={"/download"}>Download</Link>

                    </div>

                    {/* auth */}
                    <div className="flex gap-x-2">
                        <Link href={"#"}>Login</Link>
                        <Link href={"#"}>Register</Link>
                    </div>
                </nav>
            </ContainerMain>
        </header>
     );
}
 
export default NavBar;