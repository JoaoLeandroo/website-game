import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import ContainerMain from "@/components/others/ContainerMain";
import { TableAccount } from "../_components/TableAccounts";

const ControlPainel = () => {
  return (
    <ContainerMain>
      <ContainerMain>
        <div className="flex flex-col">
          <div className="mt-5 mb-5">
            <BreadcrumbPages namePage="Painel de controle" />
          </div>
          <section className="flex flex-col">
            <div className="w-full flex items-center justify-center flex-col">
              <h1 className="font-bungee text-3xl gradient-text-yellow drop-shadow-primary">
                Painel de controle
              </h1>
              <p className="text-desc mb-2">
                para ajudar você a aproveitar ao máximo o RoseOnlineBrasil.
              </p>
            </div>

            <TableAccount />
          </section>
        </div>
      </ContainerMain>
    </ContainerMain>
  );
};

export default ControlPainel;
