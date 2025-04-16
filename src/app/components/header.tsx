import Image from "next/legacy/image";
import Link from "next/link";
import { scrollTo } from "../lib/utils";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full flex justify-center px-4">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={64}
          onClick={() => scrollTo("top")}
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
}
