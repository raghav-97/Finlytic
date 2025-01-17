import { Header } from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <div>{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
