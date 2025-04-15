"use client";
import { Button } from "@mantine/core";
import {
  IconArrowDown,
  IconBuildingFactory2,
  IconCar,
  IconCheck,
  IconMail,
  IconPhone,
  IconSunElectricity,
  IconVaccineBottle,
} from "@tabler/icons-react";
import Image from "next/image";
import { JSX } from "react";
import leistungen from "./lib/leistungen.json";
import { textLg, textMd, textTitle, textXl } from "./lib/styles";
import { scrollTo } from "./lib/utils";

export default function Home() {
  const icons: { [key: string]: JSX.Element } = {
    Automotive: <IconCar size={48} />,
    Industrie: <IconBuildingFactory2 size={48} />,
    Medizin: <IconVaccineBottle size={48} />,
    Energie: <IconSunElectricity size={48} />,
  };

  return (
    <>
      <section id="hero" className="w-full h-[720px] min-h-[66vh] relative">
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
      </section>
      <section
        id="about"
        className={`px-8 py-24 bg-[var(--light)] flex items-center gap-8`}
      >
        {/* <Image src="/img/factory.jpg" alt="Factory" width={720} height={500} /> */}
        <div className="flex flex-col gap-4">
          <h2
            className={`${textLg} font-bold tracking-tighter text-[var(--dark)]`}
          >
            DELTEC GROUP ist Ihr idealer Partner, wenn es um die Fertigung und
            Montage von elektronischen Baugruppen geht.
          </h2>
          <p className={textLg}>
            Als mittelständisches Unternehmen haben wir es geschafft zu einem
            der führenden Elektronik-Fertigungsdienstleister (EMS) in Europa zu
            werden.
          </p>
          <p className={textLg}>
            Mit unserem hochmodernen Maschinenpark am zertifizierten
            Produktionsstandort in Furth im Wald bieten wir unseren Kunden alle
            Fertigungstechnologien in wirtschaftlicher Spitzenqualität.
          </p>
        </div>
      </section>
      <section className={`py-16`}>
        <h2 className={`${textXl} text-center p-8`}>Unsere Leistungen</h2>
        {leistungen.map((l, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2">
            <div
              className={`w-full h-64 md:min-h-[50vh] relative ${
                i % 2 === 1 ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={`/img/${i + 1}.jpg`}
                alt={`${l.name} Image`}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 480px"
              />
            </div>
            <div
              className={`flex flex-col justify-center gap-4 p-8 ${
                i % 2 === 1 ? "md:order-2" : "md:order-1"
              }`}
            >
              <header className="flex items-center gap-2 text-[var(--main)]">
                {icons[l.name]}
                <h3 className="text-4xl font-bold tracking-tighter">
                  {l.name}
                </h3>
              </header>
              <p className="text-[var(--dark)]">{l.description}</p>
              <div className="flex flex-col gap-2">
                {l.solutions.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <IconCheck size={16} />
                    <p className={textMd}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section
        className={`py-32 flex flex-col justify-center items-center gap-2 md:gap-8`}
      >
        <h3 className={textXl}>Kontaktieren Sie uns.</h3>
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            size="lg"
            component="a"
            href="mailto:info@deltecgroup.com"
            leftSection={<IconMail size={20} />}
          >
            info@deltecgroup.com
          </Button>
          <Button
            size="lg"
            variant="light"
            component="a"
            href="tel:0997384550"
            leftSection={<IconPhone size={20} />}
          >
            +49 9973 84550
          </Button>
        </div>
      </section>
    </>
  );
}
