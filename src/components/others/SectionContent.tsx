import { ReactNode } from "react";

const SectionContent = ({ children }: { children: ReactNode }) => {
  return (
    <section className="max-w-[1280px] w-full mx-auto bg-blue-50 px-2 md:px-7">
      {children}
    </section>
  );
};

export default SectionContent;