import { Metadata } from "next";
import { textLg, textXl } from "../lib/styles";

export const metadata: Metadata = {
  title: "Datenschutz – DELTEC GROUP",
};

export default function Page() {
  return (
    <section>
      <article>
        <h1 className={textXl}>Datenschutz</h1>
        <p>
          Die Betreiber dieser Seite nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <h2 className={textLg}>Kontakt</h2>
        <p>DELTEC Group GmbH</p>
        <p>Dr.-Georg-Schäfer-Straße 1</p>
        <p>D-93437 Furth im Wald</p>
        <p>Telefon: +49 (0) 9973 8455-0</p>
        <p>Telefax: +49 (0) 9973 8455-110</p>
        <p>E-Mail: info[@]deltecgroup.com</p>
      </article>
      <article>
        <h2 className={textLg}>Datenschutzbeauftragter</h2>
        <p>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
          E-Mail oder wenden Sie sich direkt an die für den Datenschutz
          verantwortliche Person in unserer Organisation:
        </p>
        <p>Bernhard Höllerer</p>
        <p>Kreuzbühler Straße 23a</p>
        <p>D-91220 Schnaittach</p>
        <p>E-Mail: datenschutz[@]deltecgroup.com</p>
      </article>
    </section>
  );
}
