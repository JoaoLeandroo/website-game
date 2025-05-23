import { ReactNode } from "react";

const SectionContent = ({ children }: { children: ReactNode }) => {
  return (
    <section className="max-w-[1024px] w-full mx-auto">
      {children}
    </section>
  );
};

export default SectionContent;