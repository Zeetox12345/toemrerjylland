import React from 'react';
import { CheckCircle, Home, Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const RenoveringContent = () => {
  return (
    <>
      {/* Intro section */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Totalrenoveringer i Jylland - Forvandl dit Hjem
        </h2>
        <p className="text-gray-700 leading-relaxed">
          En totalrenovering kan give dit hjem nyt liv og øge både komfort og værdi betydeligt. 
          Vi har specialiseret os i renoveringer af ældre huse i Jylland og ved præcis, 
          hvad der skal til for at modernisere dit hjem, mens vi respekterer dets karakter og arkitektur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">150+ Renoveringer</h3>
            <p className="text-sm text-gray-600">Fuldført i Jylland</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">30-50% Værdiøgning</h3>
            <p className="text-sm text-gray-600">Gennemsnitlig boligværdi</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Energioptimering</h3>
            <p className="text-sm text-gray-600">Op til 40% besparelse</p>
          </div>
        </div>
      </section>

      {/* Renoverings typer */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Vores Renoveringsløsninger
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Køkkenrenovering</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Nye køkkenskabe og bordplader</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Moderne el og VVS-installationer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gulv og væg-finish</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Belysning og ventilation</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Varighed:</strong> 1-3 uger<br/>
              <strong>Pris:</strong> Fra 85.000-200.000 kr
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Badeværelsesrenovering</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Vandtæt løsning og fliser</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Moderne sanitet og armatur</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gulvvarme og ventilation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Spejle og opbevaring</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Varighed:</strong> 1-2 uger<br/>
              <strong>Pris:</strong> Fra 75.000-150.000 kr
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Loftsisolering</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">300-500mm ny isolering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Dampspærre og lufttætning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ventilation og adgang</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Energimærkning</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Varighed:</strong> 1-2 dage<br/>
              <strong>Pris:</strong> Fra 180-350 kr/m²
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Totalrenovering</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Køkken, bad og alle rum</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Nye gulve og lofter</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">El, VVS og varme</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Energioptimering</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Varighed:</strong> 4-12 uger<br/>
              <strong>Pris:</strong> Fra 4.500-8.500 kr/m²
            </p>
          </div>
        </div>
      </section>

      {/* Energioptimering */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Energioptimering ved Renovering
        </h2>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
          <div className="flex items-start">
            <Lightbulb className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-800 mb-2">Spar op til 40% på Varmeregningen</h3>
              <p className="text-green-700 text-sm">
                En gennemgribende energirenovering kan halvere dit energiforbrug og øge komforten markant. 
                Vi hjælper dig med at få maksimalt ud af energitilskud og -lån.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Energitiltag</th>
                <th className="px-4 py-3 text-left">Besparelse</th>
                <th className="px-4 py-3 text-left">Investering</th>
                <th className="px-4 py-3 text-left">Tilbagebetalingstid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Loftsisolering (til 500mm)</td>
                <td className="px-4 py-3">15-25%</td>
                <td className="px-4 py-3">25.000-45.000 kr</td>
                <td className="px-4 py-3">8-12 år</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Nye vinduer (3-lag)</td>
                <td className="px-4 py-3">10-15%</td>
                <td className="px-4 py-3">35.000-80.000 kr</td>
                <td className="px-4 py-3">12-18 år</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Varmepumpe (luft-vand)</td>
                <td className="px-4 py-3">30-50%</td>
                <td className="px-4 py-3">80.000-150.000 kr</td>
                <td className="px-4 py-3">10-15 år</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Facadeisolering</td>
                <td className="px-4 py-3">20-30%</td>
                <td className="px-4 py-3">120.000-250.000 kr</td>
                <td className="px-4 py-3">15-25 år</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Renoveringsprocessen */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Sådan Forløber din Renovering
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold">Rådgivning & Planlægning</h3>
                <p className="text-sm text-gray-600">Gennemgang af ønsker, budget og muligheder</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold">Design & Materialevalg</h3>
                <p className="text-sm text-gray-600">3D-visualisering og valg af materialer</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold">Detaljeret Tilbud</h3>
                <p className="text-sm text-gray-600">Fast pris og klar tidsplan</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold">Projektstart</h3>
                <p className="text-sm text-gray-600">Materialelevering og byggeplads-etablering</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold">Nedrivning & Forberedelse</h3>
                <p className="text-sm text-gray-600">Kontrolleret nedrivning og byggeforberedelse</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
              <div>
                <h3 className="font-semibold">Byggefase</h3>
                <p className="text-sm text-gray-600">El, VVS, isolering og overflader</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
              <div>
                <h3 className="font-semibold">Finish & Aflevering</h3>
                <p className="text-sm text-gray-600">Slutpolering og kvalitetskontrol</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
              <div>
                <h3 className="font-semibold">Garanti & Service</h3>
                <p className="text-sm text-gray-600">5 års garanti og efterfølgende service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tilskud og finansiering */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Tilskud og Finansiering
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-3">Energitilskud</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Bygningspulje: Op til 50.000 kr til energirenovering</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Varmepumpetilskud: 30.000 kr til luft-vand varmepumpe</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Solcelletilskud: Fra kommunen</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-3">Finansieringsmuligheder</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Energilån: Lave renter til energiforbedringer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Boliglån: Refinansier dit lån med renoveringen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Ratebetaling: Afdrag direkte til os</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Vi Hjælper med Ansøgninger</h3>
              <p className="text-yellow-700 text-sm">
                Vi har erfaring med ansøgninger om energitilskud og kan hjælpe dig med at få maksimalt ud af de tilgængelige ordninger. 
                Det kan betyde tusindvis af kroner i besparelser på dit renoveringsprojekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-white rounded-lg p-8 text-center">
        <h2 className="font-montserrat font-bold text-2xl mb-4">
          Klar til at Renovere dit Hjem?
        </h2>
        <p className="text-lg mb-6">
          Ring til os på {PHONE_DISPLAY} for en gratis rådgivning og få et uforpligtende tilbud på din renovering.
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

export default RenoveringContent;
