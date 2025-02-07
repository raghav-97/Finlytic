import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { Navigation } from "./Navigation";
import { HeaderLogo } from "./HeaderLogo";
import { WelcomeMsg } from "./WelcomeMsg";
import { GetStarted } from "./GetStarted";

export const Header = () => {
  return (
    <header className="bg-[#00ADB5] px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400t" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        <GetStarted />
      </div>
    </header>
  );
};
