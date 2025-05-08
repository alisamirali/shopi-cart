import Container from "./Container";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
// import { getMyOrders } from "@/sanity/queries";
import HeaderMenu from "@/components/HeaderMenu";
import FavoriteButton from "@/components/FavoriteButton";
import SignIn from "@/components/SingIn";
import MobileMenu from "@/components/MobileMenu";
import SearchBar from "@/components/SearchBar";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;

  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-1.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          {user && (
            <Link
              href="/orders"
              className="group relative hover:text-shop_light_green hoverEffect"
            >
              <Logs className="size-6" />
              <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white size-4 rounded-full text-[10px] font-semibold flex items-center justify-center p-1">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          )}

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
