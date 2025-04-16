import { Button } from "@mantine/core";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { textXl } from "../lib/styles";

export default function ContactSection() {
  return (
    <section className="py-32 flex flex-col justify-center items-center gap-4">
      <h3 className={textXl}>Kontaktieren Sie uns.</h3>
      <p className="max-w-[660px] text-center text-[var(--dark)]">
        Wenn Sie sich für eine unserer Dienstleistungen interessieren und mit
        uns in Kontakt treten wollen, freuen wir uns über ihre Kontaktaufnahme.
      </p>
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
  );
}
