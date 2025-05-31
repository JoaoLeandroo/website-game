import SectionContent from "@/components/others/SectionContent";
import CardPack from "../_components/CardPack";

const Packages = () => {
  return (
    <SectionContent>
      <section className="flex flex-col">
        <div className="w-full bg-blue-300">teste</div>

        <div className="flex gap-x-3 gap-y-4 mt-10 flex-wrap items-center justify-center">
          <CardPack
            namePack="Opala"
            amountRc={"100"}
            price={10}
            amountBrinde={10}
          />
          <CardPack
            namePack="Amethyst"
            amountRc={"220"}
            price={20}
            amountBrinde={20}
          />
          <CardPack
            namePack="Garnet"
            amountRc={"460"}
            price={40}
            amountBrinde={50}
          />
          <CardPack
            namePack="Esmeralda"
            amountRc={"700"}
            price={60}
            amountBrinde={100}
          />
          <CardPack
            namePack="Rubi"
            amountRc={"960"}
            price={80}
            amountBrinde={110}
          />
          <CardPack
            namePack="Esmeralda"
            amountRc={"1530"}
            price={120}
            amountBrinde={150}
          />
        </div>
      </section>
    </SectionContent>
  );
};

export default Packages;
