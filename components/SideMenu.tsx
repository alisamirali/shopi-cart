"use client";

import { headerData } from "@/constants/data";
import { useOutsideClick } from "@/hooks";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-y-0 h-dvh left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-dvh p-10 border-r border-r-shop_light_green flex flex-col gap-6 justify-between"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-5">
            <Logo className="text-white" spanDesign="group-hover:text-white" />
            <button
              onClick={onClose}
              className="hover:text-shop_light_green hoverEffect"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
            {headerData?.map((item) => (
              <Link
                href={item?.href}
                key={item?.title}
                onClick={onClose}
                className={`hover:text-shop_light_green hoverEffect ${
                  pathname === item?.href && "text-white"
                }`}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
