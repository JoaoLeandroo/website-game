import BannerHome from "@/components/others/BannerHome";
import ContainerMain from "@/components/others/ContainerMain";


export default function Home() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <BannerHome/>
      <div className="h-[1000px]">
        <ContainerMain>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          aspernatur porro incidunt ipsam officiis deserunt molestiae quidem
          necessitatibus possimus animi qui eos tenetur nihil odit, laboriosam
          numquam et eveniet. Illum.
        </ContainerMain>
      </div>
    </div>
  );
}
