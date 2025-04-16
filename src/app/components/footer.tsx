import Image from "next/legacy/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[var(--foreground)] text-white/66">
      <p className="hidden md:block">© 2025 DELTEC GROUP</p>
      <Link href="/">
        <Image
          src="/logo_white.svg"
          alt="Logo"
          width={140}
          height={96}
          className="cursor-pointer"
        />
      </Link>
      <nav className="flex gap-4">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </footer>
  );
}
