import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import { textTitle } from "../lib/styles";
import { scrollTo } from "../lib/utils";

export default function HeroSection() {
  return (
    <div id="hero" className="w-full h-[720px] min-h-[66vh] relative">
      <Image src="/img/hero.jpg" alt="Hero" fill objectFit="cover" />
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-center">
        <h1 className={`${textTitle} max-w-[660px]`}>
          High Performance Electronics Manufacturing
        </h1>
        <IconArrowDown
          size={32}
          className="cursor-pointer"
          onClick={() => scrollTo("about", -4)}
        />
      </div>
    </div>
  );
}
