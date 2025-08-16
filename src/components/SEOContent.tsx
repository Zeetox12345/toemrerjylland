import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Hvor hurtigt kan I starte?",
    answer: "Som regel inden for 10 dage; akutte tag- og vejrskader håndteres samme dag."
  },
  {
    question: "Skal jeg selv søge byggetilladelse?",
    answer: "Nej, vi kan klare hele byggesagen for et mindre gebyr."
  },
  {
    question: "Hvordan foregår betalingen?",
    answer: "Bankoverførsel i rater; MobilePay ved små reparationer."
  },
  {
    question: "Hvad hvis I finder skjulte skader?",
    answer: "Vi dokumenterer med billeder og fremlægger fast tillægspris, før vi fortsætter."
  },
  {
    question: "Giver I garanti?",
    answer: "Ja, 5 års garanti på tømrerarbejde samt materialegaranti på træ."
  }
];

const SEOContent = () => {
  return (
    <>
      {/* Intro */}
      <section id="intro" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Tømrer&nbsp;Jylland – Din komplette guide til kvalitets tømrerarbejde</h1>
        <p className="mb-4">Velkommen til Jyllands mest omfattende ressource om professionelt tømrerarbejde. Her finder du alt, du skal vide, før du hyrer en <strong>tømrer Jylland</strong> – fra konkrete priseksempler og materialevalg til tips om myndighedskrav, energioptimering og byggetekniske løsninger. Formålet er at give dig et solidt beslutningsgrundlag, så du kan vælge den rigtige løsning og undgå dyre fejltagelser.</p>
      </section>

      {/* Why local */}
      <section id="why-local" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-3">Hvorfor vælge en lokal tømrer i Jylland?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Materialerne</strong> – Jyllands klima kræver specielle trætyper og imprægnering for optimal holdbarhed.</li>
          <li><strong>Kommunale byggeregler</strong> – Vi kender lokale krav til energiklasser, byggetilladelser og bevaringsværdige områder.</li>
          <li><strong>Leverandørnetværket</strong> – Hurtig levering af kvalitetstræ, tagmaterialer og specialværktøj sparer dig både tid og penge.</li>
          <li><strong>Responstiden</strong> – Akutte tagskader eller stormsikring kan oftest udbedres samme dag.</li>
        </ul>
      </section>

      {/* Top tasks table */}
      <section id="top-tasks" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">De 5 mest efterspurgte tømreropgaver i Jylland</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Opgave</th>
              <th className="px-3 py-2 text-left">Kort beskrivelse</th>
              <th className="px-3 py-2">Tidsforbrug</th>
              <th className="px-3 py-2">Ca. pris*</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/tagarbejde" className="text-terracotta hover:underline">Tagarbejde</Link></td>
              <td className="px-3 py-2">Nyt tag, reparationer, tagrender</td>
              <td className="px-3 py-2">3-10 dage</td>
              <td className="px-3 py-2">45.000-180.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/tilbygninger" className="text-terracotta hover:underline">Tilbygninger</Link></td>
              <td className="px-3 py-2">Garage, orangeri, udestue</td>
              <td className="px-3 py-2">3-8 uger</td>
              <td className="px-3 py-2">150.000-450.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Køkkenrenovering</td>
              <td className="px-3 py-2">Nyt køkken inkl. skabe og bordplader</td>
              <td className="px-3 py-2">1-3 uger</td>
              <td className="px-3 py-2">85.000-200.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium"><Link to="/services/terrasser" className="text-terracotta hover:underline">Træterrasser</Link></td>
              <td className="px-3 py-2">Terrasse, altaner, pergola</td>
              <td className="px-3 py-2">2-5 dage</td>
              <td className="px-3 py-2">25.000-75.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Loftsisolering</td>
              <td className="px-3 py-2">Energioptimering & spær-isolering</td>
              <td className="px-3 py-2">1-3 dage</td>
              <td className="px-3 py-2">15.000-45.000 kr.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm italic">*Erfaringspriser; varierer efter kompleksitet, materialer og årstid.</p>
      </section>

      {/* 3. Sådan forløber et tømrerprojekt */}
      <section id="process" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Sådan forløber et tømrerprojekt – trin for trin</h2>
        <ol className="list-decimal ml-6 space-y-3">
          <li>
            <strong>Gratis rådgivning &amp; opmåling:</strong> Ring <a href={`tel:${PHONE_LINK}`} className="text-terracotta font-semibold">{PHONE_DISPLAY}</a> eller udfyld tilbudsformularen. En erfaren tømrer møder op og gennemgår dit projekt fra fundament til tag.
          </li>
          <li>
            <strong>Tilbud &amp; tidsplan:</strong> Du modtager et skriftligt tilbud med fast pris, realistisk tidslinje og betalingsmilepæle.
          </li>
          <li>
            <strong>Myndighedsansøgning:</strong> Tilbygninger &gt; 50 m² eller større tagændringer kræver byggetilladelse – vi tager dialogen med kommunen.
          </li>
          <li>
            <strong>Materialevalg:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Træ: Douglas, lærk, egetræ eller trykimprægneret fyr.</li>
              <li>Tag: Tegl, beton, stål eller fibercement.</li>
              <li>Isolering: Mineraluld, cellulose eller naturfibre.</li>
            </ul>
          </li>
          <li>
            <strong>Udførelse &amp; tilsyn:</strong> Daglig oprydning, affaldssortering og kvalitetskontrol af mål, vinkel og fugtspærring.
          </li>
          <li>
            <strong>Aflevering &amp; garanti:</strong> Vi gennemgår arbejdet grundigt, udsteder garanti og leverer en vedligeholdelsesvejledning.
          </li>
        </ol>
      </section>

      {/* 4. Materialer, metoder og miljø */}
      <section id="materials" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Materialer, metoder og miljø i 2025</h2>
        <h3 className="text-xl font-semibold mt-6 mb-2">Trætyper &amp; behandling</h3>
        <p>Douglasgran: Naturligt holdbart og dimensionsstabilt til konstruktioner.</p>
        <p>Lærketræ: Perfekt til terrasser og facadebeklædning uden imprægnering.</p>
        <p>Trykimprægneret fyr: Økonomisk valg til fundamentsnære konstruktioner.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Tagmaterialer</h3>
        <p>Teglsten: Klassisk og langvarig, med 40+ års levetid.</p>
        <p>Stålplader: Letvægts og regnvejrssikre, ideelle til store tage.</p>
        <p>Fibercement: Moderne materiale med god pris/holdbarhed-ratio.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Isolering</h3>
        <p>Mineraluld: Standard isolering med god brandmodstand.</p>
        <p>Cellulosefibre: Miljøvenligt alternativ lavet af genbrugt papir.</p>
        <p>Naturfibre: Hemp eller træfibre til øko-byggerier.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Klimasikring</h3>
        <p>Jyllands vejrlige klima kræver god vindafstivning, effektiv fugtspærring og dimensionerede tagrender til store regnmængder.</p>
      </section>

      {/* 5. Prisguide */}
      <section id="prices" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Prisguide: Hvad koster en tømrer i Jylland?</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Arbejde</th>
              <th className="px-3 py-2">Timepris</th>
              <th className="px-3 py-2 text-left">Fastpris-eksempler</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Tømrer</td>
              <td className="px-3 py-2">475-550 kr.</td>
              <td className="px-3 py-2">Reparation af tagspær fra 8.500 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Specialiseret tagarbejde</td>
              <td className="px-3 py-2">550-650 kr.</td>
              <td className="px-3 py-2">Helt nyt tag 120 m² fra 85.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Køkken-/badrenovering</td>
              <td className="px-3 py-2">500-600 kr.</td>
              <td className="px-3 py-2">Nyt køkken inkl. skabe fra 75.000 kr.</td>
            </tr>
            <tr className="border-t">
              <td className="px-3 py-2 font-medium">Lærling/hjælper</td>
              <td className="px-3 py-2">300-350 kr.</td>
              <td className="px-3 py-2">Nedtagning af gamle lofter fra 12.000 kr.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">Tip: Indhent minimum to tilbud, men vælg kvalitet fremfor den billigste pris. Erfarne tømrere leverer holdbare løsninger, der sparer penge på lang sigt.</p>
      </section>

      {/* 6. Energibesparelse & bæredygtighed */}
      <section id="sustainability" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Energibesparelse &amp; bæredygtighed</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Certificeret træ fra bæredygtige skove reducerer CO₂-aftrykket.</li>
          <li>Optimeret isolering kan sænke varmeregningen med op til 30%.</li>
          <li>Solceller integreret i taget giver grøn strøm og værditilvækst.</li>
          <li>Regnvandsopsamling fra taget til havevanding og toilet.</li>
        </ul>
      </section>

      {/* 7. Case Study */}
      <section id="case-study" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Case study – fra 80'er-villa til moderne energiejendom</h2>
        <p><strong>Adresse:</strong> Aarhus, Jylland</p>
        <p><strong>Projekt:</strong> Nyt tag + loftsisolering + køkkenrenovering</p>
        <p><strong>Varighed:</strong> 6 uger</p>
        <p><strong>Resultat:</strong> Varmeforbruget faldt med 28%. Køkkenet blev hjerteh i hjemmet igen.</p>
        <blockquote className="border-l-4 border-terracotta pl-4 italic my-4">"Vi søgte tømrer Jylland og fandt dette professionelle team. De holdt budget og tidsplan, og resultatet overgik vores forventninger. Kan varmt anbefales!" – Susanne &amp; Michael</blockquote>
      </section>

      {/* 9. Vedligeholdelse */}
      <section id="maintenance" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Vedligeholdelsesguide – sådan holder træværket i topform</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Årlig inspektion efter storm og kraftig regn.</li>
          <li>Rens tagrender før vinter og efter løvfald.</li>
          <li>Kontroller og vedligehold træbeskyttelse hvert 3.-5. år.</li>
          <li>Udskift beskadigede tagsten eller brædder med det samme.</li>
          <li>Sørg for god ventilation i loft og krybekælder.</li>
        </ul>
      </section>

      {/* 10. Checklist */}
      <section id="checklist" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Tjekliste før du vælger din tømrer i Jylland</h2>
        <table className="min-w-full text-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Spørgsmål</th>
              <th className="px-3 py-2 text-left">Hvorfor?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td className="px-3 py-2">CVR-registreret?</td><td className="px-3 py-2">Sikrer lovlig drift og forsikring</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Uddannet tømrer?</td><td className="px-3 py-2">Faglig kompetence og kvalitetssikring</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Lokale referencer?</td><td className="px-3 py-2">Beviser kvalitet i nærområdet</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Forsikret arbejde?</td><td className="px-3 py-2">Beskyttelse ved skader</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Skriftlig tidsplan?</td><td className="px-3 py-2">Minimerer forsinkelser</td></tr>
            <tr className="border-t"><td className="px-3 py-2">Garanti på arbejdet?</td><td className="px-3 py-2">Sikkerhed for kvaliteten</td></tr>
          </tbody>
        </table>
      </section>

      {/* 11. Contact */}
      <section id="contact" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose">
        <h2 className="text-2xl font-semibold mb-4">Kontakt os</h2>
        <p>Telefon: <a href={`tel:${PHONE_LINK}`} className="text-terracotta font-semibold">{PHONE_DISPLAY}</a> (man-fre 07:00-18:00)</p>
        <p>E-mail: <a href="mailto:infotoemrerjylland@gmail.com" className="underline">infotoemrerjylland@gmail.com</a></p>
        <p>Serviceområde: Hele Jylland inkl. Aarhus, Silkeborg, Vejle, Herning, Viborg og Aalborg</p>
        
      </section>

      {/* 12. Afsluttende ord & CTA */}
      <section id="conclusion" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-prose text-center">
        <h2 className="text-2xl font-semibold mb-4">Afsluttende ord</h2>
        <p className="mb-4">At finde den rette tømrer i Jylland handler om mere end pris: Det handler om lokalt kendskab, solidt håndværk og en gennemsigtig proces fra første opkald til sidste søm. Med prisguides, tjeklister og faglig rådgivning her på siden er du godt rustet til at træffe den rigtige beslutning.</p>
      </section>

      {/* Kontakt CTA (flyttet til slutningen som ekstra call) */}
      <section id="contact-cta" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 text-center">
        <p className="text-lg font-medium">Har du spørgsmål? Ring til os på <a href={`tel:${PHONE_LINK}`} className="font-bold text-terracotta">{PHONE_DISPLAY}</a> eller udfyld formularen <em>"Få et uforpligtende tilbud nu"</em>. Vi vender tilbage samme hverdag!</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="content-section container mx-auto px-4 sm:px-6 lg:px-8 my-16 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Ofte stillede spørgsmål</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
              <AccordionTrigger className="font-medium text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default SEOContent;