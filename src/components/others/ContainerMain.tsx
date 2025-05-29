import { ReactNode } from "react";

const ContainerMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto px-0 md:px-8 relative">{children}</div>
  );
};

export default ContainerMain;
