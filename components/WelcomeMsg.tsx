"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-4 b-4">
      <h2 className="text-2xl font-bold lg:text-5xl lg:font-medium text-[#EEEEEE]">
        Welcome Back{isLoaded ? ", " : " "}
        {user?.firstName}
      </h2>
      <p className="text-base lg:font-medium lg:text-2xl text text-[#393E46]">
      👋 Ready to dive into your investments? Let’s see what’s new in your portfolio.
      </p>
    </div>
  );
};
