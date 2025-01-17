import Link from "next/link";
import { Button } from "./ui/button";
import {ChevronRight} from 'lucide-react'

export const GetStarted = () => {
  return (
    <div className="space-y-3 pt-4 w-full">
      <Button>
        <Link className="flex items-center justify-between" href="/sign-in">
          Get Started
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
};
