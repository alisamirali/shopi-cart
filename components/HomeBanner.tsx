import { Title } from "@/components/ui/text";
import { banner_1 } from "@/images";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title className="md:w-[70%] w-full">
          Grab Upto 50% off on Selected headphone
        </Title>
        <Link
          href="/shop"
          className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-80"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
