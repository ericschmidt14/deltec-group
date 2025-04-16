import { textLg } from "../lib/styles";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="px-8 py-24 bg-[var(--light)] flex items-center gap-8"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
        <h2
          className={`${textLg} font-bold tracking-tighter text-[var(--dark)]`}
        >
          DELTEC GROUP ist Ihr idealer Partner, wenn es um die Fertigung und
          Montage von elektronischen Baugruppen geht.
        </h2>
        <p className={textLg}>
          Als mittelständisches Unternehmen haben wir es geschafft zu einem der
          führenden Elektronik-Fertigungsdienstleister (EMS) in Europa zu
          werden.
        </p>
        <p className={textLg}>
          Mit unserem hochmodernen Maschinenpark am zertifizierten
          Produktionsstandort in Furth im Wald bieten wir unseren Kunden alle
          Fertigungstechnologien in wirtschaftlicher Spitzenqualität.
        </p>
      </div>
    </div>
  );
}
