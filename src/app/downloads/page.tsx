import { Button } from "@mantine/core";
import { IconArrowDown, IconArrowsDiagonal } from "@tabler/icons-react";
import { Metadata } from "next";
import { textMd, textXl } from "../lib/styles";

export const metadata: Metadata = {
  title: "Downloads – DELTEC GROUP",
};

const downloads = [
  {
    name: "Einkaufsbedingungen",
    href: "/downloads/DELTEC_Group_GmbH_Einkaufsbedingungen.pdf",
  },
  {
    name: "Verkaufsbedingungen",
    href: "/downloads/DELTEC_Group_GmbH_Verkaufsbedingungen.pdf",
  },
  {
    name: "Terms and Conditions of Sale",
    href: "/downloads/DELTEC_Group_GmbH_Terms&Conditions.pdf",
  },
];

export default function Page() {
  return (
    <section>
      <article>
        <h1 className={textXl}>Downloads</h1>
        <p>Hier finden Sie alle Dokumente als PDF zum Download.</p>
        {downloads.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2 py-4">
            <p className={textMd}>{d.name}</p>
            <div className="flex gap-4">
              <Button
                component="a"
                href={d.href}
                target="_blank"
                leftSection={<IconArrowsDiagonal size={24} />}
              >
                Ansehen
              </Button>
              <Button
                variant="light"
                component="a"
                href={d.href}
                download={true}
                rightSection={<IconArrowDown size={24} />}
              >
                Herunterladen
              </Button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
