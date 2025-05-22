import ContainerMain from "../others/ContainerMain";

const Footer = () => {
    return ( 
        <footer className="w-full bg-blue-800">
            <ContainerMain>
                <div className="flex h-16 items-center justify-center">
                    <p className="text-white">&copy; {new Date().getFullYear()} RoseOnlineBrasil. Todos os direitos reservados.</p>
                </div>
            </ContainerMain>
        </footer>
     );
}
 
export default Footer;