import SectionContent from "@/components/others/SectionContent";
import { BreadcrumbPages } from "@/components/others/BreadcrumbPages";
import { TableEvents } from "@/components/others/TableEvents";

const SeasonalEvents = () => {
  return (
    <SectionContent>
      <section className="flex flex-col px-4 md:px-10">
        <div className="mt-5">
          <BreadcrumbPages namePage="Seasonal events" />
        </div>

        <div>
          <h1 className="gradient-text-yellow font-bungee text-3xl drop-shadow-primary mt-8 mb-2">
            Seasonal Events
          </h1>
          <p className="text-desc mb-5">
            Os eventos sazonais são ocasiões especiais que ocorrem ao longo do
            ano, em datas específicas, e acontecem apenas uma vez por ano. Por
            isso, aproveite sempre que um desses eventos estiver ativo para
            conquistar todos os itens especiais disponíveis durante o período!
          </p>
        </div>

        <div className="mb-20 w-full flex items-center justify-center">
            <TableEvents />
        </div>
      </section>
    </SectionContent>
  );
};

export default SeasonalEvents;
