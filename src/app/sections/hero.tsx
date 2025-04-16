import { ActionIcon, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconArrowDown,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import { textTitle } from "../lib/styles";
import { scrollTo } from "../lib/utils";

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      id="hero"
      className="w-full h-[720px] min-h-[66vh] relative overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={`/video${isMobile ? "/hero-mobile.mp4" : "/hero.mp4"}`}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute z-1 inset-0 w-full h-full bg-gradient-to-r from-white/20 via-white/60 to-white/20 md:from-white/0 md:via-white/80 md:to-white/0" />
      <div className="absolute z-10 inset-0 flex flex-col gap-8 items-center justify-center text-center">
        <h1 className={`${textTitle} text-black/66 max-w-[660px] px-4`}>
          High Performance Electronics Manufacturing
        </h1>
        <div className="flex items-center gap-2">
          <Button
            color="black"
            variant="light"
            leftSection={<IconArrowDown size={16} className="cursor-pointer" />}
            onClick={() => scrollTo("about", -4)}
          >
            Mehr erfahren
          </Button>
          <ActionIcon
            variant="transparent"
            color="black"
            size="lg"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <IconPlayerPause size={16} />
            ) : (
              <IconPlayerPlay size={16} />
            )}
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
