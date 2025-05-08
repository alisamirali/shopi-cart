"use client";

import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  const { items } = useStore();

  return (
    <Link href="/cart" className="group relative">
      <ShoppingBag className="size-6 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white size-4 rounded-full text-[10px] font-semibold flex items-center justify-center p-1">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};

export default CartIcon;
