import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-lg md:text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans inline-flex",
        className
      )}
    >
      Shopi
      <span
        className={cn(
          "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
          spanDesign
        )}
      >
        Cart
      </span>
    </Link>
  );
};

export default Logo;
