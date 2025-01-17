"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-4 max-w-3xl pt-6">
      <h2 className="text-2xl font-bold lg:text-4xl lg:font-medium text-[#EEEEEE]">
        Finlytic - Elevate Your Portfolio Management
      </h2>
      <p className="text-base lg:font-medium lg:text-xl text text-[#393E46]">
        Take control of your investments with our comprehensive portfolio
        management platform. Track stocks, analyze performance, and make
        informed decisions with real-time NSE and BSE data.
      </p>
    </div>
  );
};
