"use client";
import Footer from "./footer";
import Header from "./header";

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
      <Header />
      {children}
      <Footer />
    </main>
  );
}
