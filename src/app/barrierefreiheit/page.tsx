import { Metadata } from "next";
import { textLg, textXl } from "../lib/styles";

export const metadata: Metadata = {
  title: "Datenschutz – DELTEC GROUP",
};

export default function Page() {
  return (
    <section>
      <article>
        <h1 className={textXl}>Barrierefreiheit</h1>
        <p>
          Die Betreiber dieser Seite setzen sich dafür ein, die Website
          barrierefrei zugänglich zu machen, gemäß den gesetzlichen Bestimmungen
          nach dem Barrierefreiheitsstärkungsgesetz (BFSG) und den Vorgaben der
          EU-Richtlinie 2016/2102.
        </p>
        <h2 className={textLg}>Stand der Vereinbarkeit</h2>
        <p>
          Diese Website ist vollständig mit den Anforderungen der EN 301 549
          (WCAG 2.1 – Level AA) vereinbar.
        </p>
        <h2 className={textLg}>Erstellung dieser Erklärung</h2>
        <p>
          Diese Erklärung wurde am 02.05.2025 erstellt. Die Bewertung basiert
          auf einer Selbstbewertung.
        </p>
        <h2 className={textLg}>Regelmäßige Überprüfung</h2>
        <p>
          Diese Erklärung zur Barrierefreiheit wird regelmäßig geprüft und bei
          Bedarf an aktuelle Standards und Anforderungen angepasst.
        </p>
        <h2 className={textLg}>Kontakt</h2>
        <p>
          Sollten Ihnen Barrieren auf unserer Website auffallen oder benötigen
          Sie Inhalte in einer zugänglicheren Form, können Sie uns unter
          folgenden Kontaktmöglichkeiten erreichen:
        </p>
        <p>DELTEC Group GmbH</p>
        <p>Dr.-Georg-Schäfer-Straße 1</p>
        <p>D-93437 Furth im Wald</p>
        <p>Telefon: +49 (0) 9973 8455-0</p>
        <p>E-Mail: info[@]deltecgroup.com</p>
      </article>
    </section>
  );
}
