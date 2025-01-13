import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen h-full items-center">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex justify-center items-center pt-12">
          <Image src={"/logo.svg"} width={70} height={70} alt="Logo" />
          <h1 className="font-bold text-6xl px-4">Finlytic</h1>
        </div>
        <div className="text-center space-y-3">
          <h1 className="font-bold text-3xl">Welcome Back</h1>
          <p className="text-base">
            Log In or Sign up to access the dashboard!
          </p>
        </div>
        <div className="mt-4">
          <ClerkLoaded>
            <SignUp path="/sign-up"/>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
