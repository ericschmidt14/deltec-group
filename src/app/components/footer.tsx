import Image from "next/legacy/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-2 bg-[var(--foreground)] text-white/66">
      <Link href="/">
        <Image
          src="/logo_white.svg"
          alt="Logo"
          width={120}
          height={64}
          className="cursor-pointer"
        />
      </Link>
      <nav className="flex gap-4 md:gap-8">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/downloads">Downloads</Link>
      </nav>
    </footer>
  );
}
