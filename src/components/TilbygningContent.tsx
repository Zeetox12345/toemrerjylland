import React from 'react';
import { CheckCircle, Home, Building, Users, AlertTriangle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const TilbygningContent = () => {
  return (
    <>
      {/* Intro section */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Tilbygninger i Jylland - Mere Plads til dit Hjem
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Drømmer du om mere plads? En tilbygning kan være den perfekte løsning til at udvide dit hjem. 
          Vi har specialiseret os i tilbygninger i Jylland og kender de lokale byggeregler, 
          myndighedskrav og klimaforhold. Fra garage til orangeri - vi gør dine drømme til virkelighed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">200+ Tilbygninger</h3>
            <p className="text-sm text-gray-600">Udført i Jylland</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Alle Typer</h3>
            <p className="text-sm text-gray-600">Garage, orangeri, udestue</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Fra A til Z</h3>
            <p className="text-sm text-gray-600">Inkl. byggetilladelse</p>
          </div>
        </div>
      </section>

      {/* Typer af tilbygninger */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Populære Tilbygningstyper
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Garage</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Enkelt eller dobbelt garage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Med eller uden loft</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Integreret carport</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Størrelse:</strong> Fra 20-60 m²<br/>
              <strong>Pris:</strong> Fra 150.000-350.000 kr
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Orangeri</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Store glaspartier</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Isolerede vægge</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gulvvarme</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Størrelse:</strong> Fra 15-40 m²<br/>
              <strong>Pris:</strong> Fra 250.000-500.000 kr
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Udestue</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Traditionel tilbygning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Åben forbindelse til hus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ekstra spiseplads</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Størrelse:</strong> Fra 25-50 m²<br/>
              <strong>Pris:</strong> Fra 200.000-400.000 kr
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Ekstra Værelser</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Soveværelse eller kontor</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Eget badeværelse</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Indbyggede skabe</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Størrelse:</strong> Fra 20-40 m²<br/>
              <strong>Pris:</strong> Fra 180.000-350.000 kr
            </p>
          </div>
        </div>
      </section>

      {/* Byggetilladelse */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Byggetilladelse og Regler
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Vi Klarer Byggetilladelsen</h3>
              <p className="text-blue-700 text-sm">
                Vi har erfaring med byggesagsbehandling i alle jyske kommuner og klarer hele processen for dig. 
                Det inkluderer tegninger, ansøgninger og kommunikation med myndighederne.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Tilbygningsstørrelse</th>
                <th className="px-4 py-3 text-left">Byggetilladelse</th>
                <th className="px-4 py-3 text-left">Behandlingstid</th>
                <th className="px-4 py-3 text-left">Særlige krav</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Under 50 m²</td>
                <td className="px-4 py-3">Byggetilladelse</td>
                <td className="px-4 py-3">4-8 uger</td>
                <td className="px-4 py-3">Afstand til skel</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Over 50 m²</td>
                <td className="px-4 py-3">Fuld byggetilladelse</td>
                <td className="px-4 py-3">8-12 uger</td>
                <td className="px-4 py-3">Statisk beregning</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Garage under 50 m²</td>
                <td className="px-4 py-3">Anmeldelse</td>
                <td className="px-4 py-3">2-4 uger</td>
                <td className="px-4 py-3">Min. 2,5 m til skel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Prisfaktorer */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Hvad Påvirker Prisen på din Tilbygning?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Konstruktion</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Fundamentstype (strip, plade eller pæle)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Vægkonstruktion (træ, murværk eller letbeton)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tagkonstruktion og belægning</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Finish & Installation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Vinduer og døre (standard eller premium)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">El og VVS-installationer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gulv, vægge og loft (finish-niveau)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Priseksempel: Garage 30 m²</h3>
          <div className="text-sm text-yellow-700 space-y-1">
            <p><strong>Grundudstyr:</strong> Betonfundament, træramme, teglsten, stålport</p>
            <p><strong>Pris:</strong> 180.000-220.000 kr inkl. moms</p>
            <p><strong>Ekstra:</strong> Loft (+25.000 kr), vinduer (+15.000 kr), strøm (+12.000 kr)</p>
          </div>
        </div>
      </section>

      {/* Byggeproces */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Byggeprocessen - Fra Idé til Nøglefærdig
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
            <h3 className="font-semibold mb-2">Rådgivning & Design</h3>
            <p className="text-sm text-gray-600">Besigtigelse, ønsker, skitseforslag og 3D-visualisering</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
            <h3 className="font-semibold mb-2">Tilbud & Kontrakt</h3>
            <p className="text-sm text-gray-600">Detaljeret tilbud, tidsplan og kontraktunderskrivelse</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
            <h3 className="font-semibold mb-2">Byggetilladelse</h3>
            <p className="text-sm text-gray-600">Ansøgning, tegninger og myndighedsbehandling</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
            <h3 className="font-semibold mb-2">Opstart</h3>
            <p className="text-sm text-gray-600">Materialebestilling, tidsplan og byggeplads-indretning</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">5</div>
            <h3 className="font-semibold mb-2">Bygning</h3>
            <p className="text-sm text-gray-600">Fundament, rejsning, tag og færdiggørelse</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">6</div>
            <h3 className="font-semibold mb-2">Aflevering</h3>
            <p className="text-sm text-gray-600">Gennemgang, eventuelle justeringer og nøgleoverdragelse</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-white rounded-lg p-8 text-center">
        <h2 className="font-montserrat font-bold text-2xl mb-4">
          Klar til din Tilbygning?
        </h2>
        <p className="text-lg mb-6">
          Ring til os på {PHONE_DISPLAY} for en gratis rådgivning og få et skitseforslag til din tilbygning.
        </p>
        <a 
          href={`tel:${PHONE_LINK}`}
          className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Ring Nu for Gratis Rådgivning
        </a>
      </section>
    </>
  );
};

export default TilbygningContent;
