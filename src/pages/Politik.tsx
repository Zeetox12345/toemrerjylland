
import React from 'react';
import { PHONE_DISPLAY } from "@/lib/constants";

const Politik = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl mb-8 text-charcoal">
            Privatlivspolitik & Cookies
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Privatlivspolitik</h2>
              <p className="text-gray-700 mb-4">
                TODO: Implementer GDPR-klar privatlivspolitik for Murer Silkeborg.
              </p>
              <p className="text-gray-700 mb-4">
                Denne side skal indeholde information om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Hvilke personoplysninger vi indsamler</li>
                <li>Hvordan vi bruger personoplysninger</li>
                <li>Hvem vi deler oplysninger med</li>
                <li>Dine rettigheder som registreret</li>
                <li>Kontaktoplysninger til dataansvarlig</li>
              </ul>
            </section>

            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Cookiepolitik</h2>
              <p className="text-gray-700 mb-4">
                TODO: Implementer cookiepolitik for Murer Silkeborg.
              </p>
              <p className="text-gray-700 mb-4">
                Denne sektion skal indeholde:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Hvad cookies er</li>
                <li>Hvilke cookies vi bruger</li>
                <li>Hvordan du kan administrere cookies</li>
                <li>Tredjepartscookies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-montserrat font-semibold text-2xl mb-4">Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Hvis du har spørgsmål til vores behandling af personoplysninger, 
                kan du kontakte os på:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Murer Silkeborg</strong></p>
                <p>E-mail: info@murersilkeborg.dk</p>
                <p>Telefon: {PHONE_DISPLAY}</p>
              </div>
            </section>

            <section className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-500">
                Sidst opdateret: Januar 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Politik;
