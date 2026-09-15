import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName: string;
};

export default function MediaPlaceholder({
  src,
  alt,
  className,
  placeholderClassName,
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("bg-cover bg-center", placeholderClassName, className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
