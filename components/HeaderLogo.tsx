import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex ">
        <Image src="/logo.svg" height={35} width={35} alt="Logo" />
        <p className="text-[#222831] font-semibold text-3xl ml-2.5">Finlytic</p>
      </div>
    </Link>
  );
};
