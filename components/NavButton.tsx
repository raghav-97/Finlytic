import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  href: string;
  label: string;
  isActive?: boolean
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Button 
    asChild
    size="sm"
    variant='outline'
    className={cn("w-full lg:w-auto justify-between font-normal text-[#222831] hover:bg-white/40 hover:text-[#EEEEEE] outline-none border-none", isActive ? "bg-white/20" : "bg-transparent")}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
