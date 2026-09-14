import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  reverse?: boolean;
};

export default function GradientCard({
  children,
  className,
  innerClassName,
  reverse = false,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] p-px",
        reverse
          ? "bg-[linear-gradient(to_right,var(--brand),var(--brand-blue))]"
          : "bg-brand-gradient",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-[31px] bg-white",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
