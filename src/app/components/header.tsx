import Image from "next/image";
import Link from "next/link";
import { scrollTo } from "../lib/utils";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-center p-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={140}
          height={96}
          onClick={() => scrollTo("top")}
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
}
