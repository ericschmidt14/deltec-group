"use client";
import Image from "next/image";
import Link from "next/link";
import { scrollTo } from "../lib/utils";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      id="top"
      className="w-full min-h-screen flex flex-col justify-between"
    >
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
      {children}
      <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[var(--foreground)] text-white">
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
    </main>
  );
}
