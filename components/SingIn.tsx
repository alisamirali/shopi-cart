"use client";

import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";

const SignIn = ({ className }: { className?: string }) => {
  return (
    <SignInButton mode="modal">
      <button
        className={cn(
          "text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect",
          className
        )}
      >
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
