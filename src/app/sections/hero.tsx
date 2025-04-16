import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowDown } from "@tabler/icons-react";
import { textTitle } from "../lib/styles";
import { scrollTo } from "../lib/utils";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      id="hero"
      className="w-full h-[720px] min-h-[66vh] relative overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={`/video${isMobile ? "/hero-mobile.mp4" : "/hero.mp4"}`}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute z-1 inset-0 w-full h-full bg-gradient-to-r from-white/20 via-white/60 to-white/20 md:from-white/0 md:via-white/80 md:to-white/0" />
      <div className="absolute z-10 inset-0 flex flex-col gap-8 items-center justify-center text-center">
        <h1 className={`${textTitle} max-w-[660px]`}>
          High Performance Electronics Manufacturing
        </h1>
        <Button
          color="black"
          variant="light"
          rightSection={<IconArrowDown size={16} className="cursor-pointer" />}
          onClick={() => scrollTo("about", -4)}
        >
          Mehr erfahren
        </Button>
      </div>
    </div>
  );
}
