import { ReactNode } from "react";

const SectionContent = ({ children }: { children: ReactNode }) => {
  return (
    <section className="max-w-[1280px] w-full mx-auto bg-blue-50 px-4 md:px-10">
      {children}
    </section>
  );
};

export default SectionContent;