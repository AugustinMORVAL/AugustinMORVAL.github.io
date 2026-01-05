import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-h-screen px-4 md:px-8 lg:px-16",
        "flex flex-col justify-center items-center",
        className
      )}
    >
      {children}
    </section>
  );
}
