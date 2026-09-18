import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  reverse?: boolean;
  toBottom?: boolean;
};

export default function GradientCard({
  children,
  className,
  innerClassName,
  reverse = false,
  toBottom = false,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "rounded-[50px] p-px",
        reverse
          ? toBottom
            ? "bg-[linear-gradient(to_bottom,var(--brand),var(--brand-blue))]"
            : "bg-[linear-gradient(to_right,var(--brand),var(--brand-blue))]"
          : toBottom
            ? "bg-[linear-gradient(to_bottom,var(--brand),var(--brand-blue))]"
            : "bg-brand-gradient",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-[50px] bg-white",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
