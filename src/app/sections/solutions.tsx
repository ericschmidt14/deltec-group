import {
  IconBuildingFactory2,
  IconCar,
  IconCheck,
  IconSunElectricity,
  IconVaccineBottle,
} from "@tabler/icons-react";
import Image from "next/image";
import { JSX } from "react";
import solutions from "../lib/solutions.json";
import { textMd, textXl } from "../lib/styles";

export default function SolutionSection() {
  const icons: { [key: string]: JSX.Element } = {
    Automotive: <IconCar size={48} />,
    Industrie: <IconBuildingFactory2 size={48} />,
    Medizin: <IconVaccineBottle size={48} />,
    Energie: <IconSunElectricity size={48} />,
  };

  return (
    <section className={`py-16`}>
      <h2 className={`${textXl} text-center p-8`}>Unsere Leistungen</h2>
      {solutions.map((l, i) => (
        <div key={i} className="group grid grid-cols-1 md:grid-cols-2">
          <div
            className={`w-full min-h-64 md:min-h-[500px] md:h-full relative overflow-hidden group ${
              i % 2 === 1 ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={`/img/${i + 1}.jpg`}
              alt={`${l.name} Image`}
              fill
              className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              objectFit="cover"
              objectPosition="bottom center"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 480px"
            />
          </div>
          <div
            className={`flex flex-col justify-center gap-4 p-8 ${
              i % 2 === 1 ? "md:order-2" : "md:order-1"
            }`}
          >
            <header className="flex items-center gap-1 text-[var(--main)]">
              {icons[l.name]}
              <h3 className="text-4xl font-bold tracking-tighter">{l.name}</h3>
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
  );
}
