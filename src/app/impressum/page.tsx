import { Metadata } from "next";
import { textLg, textMd, textXl } from "../lib/styles";

export const metadata: Metadata = {
  title: "Impressum – DELTEC GROUP",
};

export default function Page() {
  return (
    <section>
      <article>
        <h1 className={textXl}>Impressum</h1>
        <p>DELTEC Group GmbH</p>
        <p>Dr.-Georg-Schäfer-Straße 1</p>
        <p>D-93437 Furth im Wald</p>
        <h2 className={textLg}>Kontakt</h2>
        <p>Telefon: +49 (0) 9973 8455-0</p>
        <p>E-Mail: info[@]deltecgroup.com</p>
        <h2 className={textLg}>Geschäftsführer</h2>
        <p>Carsten Ellermeier</p>
        <h2 className={textLg}>Eintragung im Handelsregister</h2>
        <p>Registergericht Regensburg</p>
        <p>Registernummer: HRB 21418</p>
        <h2 className={textLg}>Umsatzsteuer ID</h2>
        <p>DE453341392</p>
      </article>
      <article>
        <h2 className={textLg}>Konzeption, Design & Umsetzung</h2>
        <p className={textMd}>CoMo Solution GmbH</p>
        <p>E-Mail: info[@]como-solution.de</p>
        <p>
          Web:{" "}
          <a href="https://como-solution.de" target="_blank">
            https://como-solution.de
          </a>
        </p>
      </article>
    </section>
  );
}
