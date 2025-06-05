import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  namePage: string;
}

export function BreadcrumbPages({ namePage }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href="/"
            className="cursor-custom-hand hover:opacity-80 text-desc"
          >
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-desc"/>
        <BreadcrumbItem>
          <p className="text-desc">...</p>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-desc"/>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-medium text-tittle">
            {namePage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
