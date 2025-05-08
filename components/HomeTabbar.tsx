"use client";

import { productType } from "@/constants/data";
import Link from "next/link";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-between">
      <div className="flex items-center gap-1.5 text-sm font-semibold overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1.5 md:gap-3">
          {productType?.map((item) => (
            <button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              className={`border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/10"}`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end w-full md:w-fit">
        <Link
          href="/shop"
          className="px-4 py-1 hover:text-shop_light_green hover:underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default HomeTabbar;
