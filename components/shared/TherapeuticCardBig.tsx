import Link from "next/link";
import Image from "next/image";
import { TherapeuticArea } from "@/types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";

interface TherapeuticCardBigProps {
  item: TherapeuticArea;
  isActive?: boolean;
  linkHref: string;
  onClick?: () => void;
}

export default function TherapeuticCardBig({
  item,
  isActive = true,
  linkHref,
  onClick,
}: TherapeuticCardBigProps) {
  const placeholderImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800";

  const getImageUrl = (img: string | { url: string } | undefined) => {
    if (!img) return undefined;
    return typeof img === "string" ? img : img.url;
  };
  
  const stringUrl = getImageUrl(item.image);
  const imageUrl = stringUrl 
    ? (stringUrl.startsWith("/images") ? stringUrl : getStrapiImageUrl(stringUrl)) 
    : placeholderImage;

  return (
    <div
      onClick={onClick}
      className="relative h-full w-full overflow-hidden rounded-[2rem] cursor-pointer"
    >
      <Image
        src={imageUrl || placeholderImage}
        alt={item.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
      />
      
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-linear-to-t to-transparent p-6 md:p-8 lg:p-10",
          isActive ? "from-black/80 via-black/25" : "from-black/20 via-transparent"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-start gap-2",
            isActive ? "opacity-100" : "opacity-0"
          )}
        >
          <h3 className="font-sans text-3xl font-normal leading-tight text-white line-clamp-2 md:text-4xl lg:text-5xl">
            {item.name}
          </h3>
          
          <Link
            href={linkHref}
            className="text-sm font-medium text-white/90 underline underline-offset-4 transition-colors hover:text-white md:text-base"
            onClick={(e) => e.stopPropagation()} 
            tabIndex={isActive ? 0 : -1}
          >
            Explore Range
          </Link>
        </div>
      </div>
    </div>
  );
}
