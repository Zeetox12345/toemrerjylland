import React from 'react';
import { CheckCircle, Sun, Droplet, Shield, AlertTriangle } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const TerrasseContent = () => {
  return (
    <>
      {/* Intro section */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Træterrasser og Altaner i Jylland
        </h2>
        <p className="text-gray-700 leading-relaxed">
          En smuk træterrasse eller altan udvider dit hjem udendørs og skaber de perfekte rammer for 
          afslapning og sociale sammenkomster. Vi bygger holdbare træterrasser der tåler det jyske vejr 
          og giver dig mange års glæde i dit uderum.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">300+ Terrasser</h3>
            <p className="text-sm text-gray-600">Bygget i Jylland</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">10+ År Garanti</h3>
            <p className="text-sm text-gray-600">På konstruktion</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold">Vejrbestandigt</h3>
            <p className="text-sm text-gray-600">Tilpasset dansk klima</p>
          </div>
        </div>
      </section>

      {/* Terrasse typer */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Forskellige Typer Terrasser og Altaner
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Jordnær Terrasse</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Direkte på fundament</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">God stabilitet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lavere byggekompleksitet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Perfekt til store arealer</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Pris:</strong> Fra 850-1.200 kr/m²<br/>
              <strong>Bedst til:</strong> Store terrasser på jævn grund
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Hævet Terrasse</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Følger husets niveau</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bedre udsigt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Plads under terrassen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Integreret med huset</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Pris:</strong> Fra 1.100-1.600 kr/m²<br/>
              <strong>Bedst til:</strong> Skrånende grunde og adgang fra stue
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Altan</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tilknyttet første sal</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Gelænder og trappe</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Privat og afskærmet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Mulig overdækning</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Pris:</strong> Fra 1.300-2.000 kr/m²<br/>
              <strong>Bedst til:</strong> Adgang fra soveværelse eller stue på 1. sal
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Tagterrasse</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Maksimal udsigt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Unikt udendørs område</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Vandtæt konstruktion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ekstrem værdiforøgelse</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              <strong>Pris:</strong> Fra 2.200-3.500 kr/m²<br/>
              <strong>Bedst til:</strong> Byejendomme og huse med fladt tag
            </p>
          </div>
        </div>
      </section>

      {/* Trætyper */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Trætyper til Terrasser - Fordele og Ulemper
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Trætype</th>
                <th className="px-4 py-3 text-left">Holdbarhed</th>
                <th className="px-4 py-3 text-left">Vedligeholdelse</th>
                <th className="px-4 py-3 text-left">Udseende</th>
                <th className="px-4 py-3 text-left">Pris/m²</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Lærketræ</td>
                <td className="px-4 py-3">25-30 år</td>
                <td className="px-4 py-3">Minimal - ingen behandling</td>
                <td className="px-4 py-3">Guldbrun → sølvgrå</td>
                <td className="px-4 py-3">450-650 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Douglasgran</td>
                <td className="px-4 py-3">20-25 år</td>
                <td className="px-4 py-3">Oliering hvert 2.-3. år</td>
                <td className="px-4 py-3">Rødbrun → grå</td>
                <td className="px-4 py-3">350-550 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Trykimprægneret fyr</td>
                <td className="px-4 py-3">15-20 år</td>
                <td className="px-4 py-3">Maling/lasur hvert 3.-5. år</td>
                <td className="px-4 py-3">Grøn → grå (ubehandlet)</td>
                <td className="px-4 py-3">280-420 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Teak</td>
                <td className="px-4 py-3">40+ år</td>
                <td className="px-4 py-3">Oliering hvert 1.-2. år</td>
                <td className="px-4 py-3">Gyldenbrun (konstant)</td>
                <td className="px-4 py-3">850-1.200 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Komposit</td>
                <td className="px-4 py-3">25+ år</td>
                <td className="px-4 py-3">Kun rengøring</td>
                <td className="px-4 py-3">Mange farver (konstant)</td>
                <td className="px-4 py-3">600-900 kr</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Vores Anbefaling</h3>
          <p className="text-green-700 text-sm">
            <strong>Lærketræ</strong> er det mest populære valg i Jylland pga. sin naturlige holdbarhed og lave vedligeholdelse. 
            Det passer perfekt til det danske klima og får en smuk sølvgrå patina over tid.
          </p>
        </div>
      </section>

      {/* Fundamentering */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Fundamentering og Konstruktion
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Fundament Muligheder</h3>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-charcoal">Betonpuder</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Mest økonomisk. Kræver jævn grund. Pris: 180-280 kr/m²
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-charcoal">Stripfundament</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Standard løsning. God til de fleste grunde. Pris: 320-450 kr/m²
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-charcoal">Pælefundament</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Til skrånende eller ustabil grund. Pris: 580-850 kr/m²
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Konstruktionsdetaljer</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">C24 konstruktionstræ til bærende elementer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Galvaniserede beslag og skruer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ventilation under terrassen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Korrekt hældning til afløb</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Dilatationsfuger ved store arealer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tilbehør og extras */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Tilbehør og Ekstrafunktioner
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Gelænder & Trin</h3>
            <ul className="space-y-2 text-sm">
              <li>• Samme trætype som terrassen</li>
              <li>• Glas-indsatser for bedre udsigt</li>
              <li>• LED-belysning i gelænderet</li>
              <li>• Brede trin for mere komfort</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Pris:</strong> Fra 1.200 kr/løbende meter
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Overdækning</h3>
            <ul className="space-y-2 text-sm">
              <li>• Pergola i matching træ</li>
              <li>• Markise eller tekstil</li>
              <li>• Glasoverdækning</li>
              <li>• LED-strips til aftenbrug</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Pris:</strong> Fra 8.500 kr for pergola
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Installationer</h3>
            <ul className="space-y-2 text-sm">
              <li>• Udendørs stikkontakter</li>
              <li>• Vandtilslutning</li>
              <li>• Indbygget belysning</li>
              <li>• Udendørs højttalere</li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Pris:</strong> Fra 3.500 kr for el-installation
            </p>
          </div>
        </div>
      </section>

      {/* Vedligeholdelse */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Vedligeholdelse af din Terrasse
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-3">Årlig Vedligeholdelse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <ul className="space-y-2">
                  <li><strong>Forår:</strong> Grundig rengøring og kontrol</li>
                  <li><strong>Sommer:</strong> Eventuel oliering (ved behov)</li>
                </ul>
                <ul className="space-y-2">
                  <li><strong>Efterår:</strong> Fjern blade og snavs</li>
                  <li><strong>Vinter:</strong> Check for løse brædder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Rengøring</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Grundig afskrubning med sæbevand</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Højtryksrenser (max 100 bar)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Specialrengøring ved algevækst</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Behandling</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Træolie hver 1-2 år (hvis ønsket)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Udskiftning af enkelte brædder</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Kontrol af beslag og konstruktion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-white rounded-lg p-8 text-center">
        <h2 className="font-montserrat font-bold text-2xl mb-4">
          Klar til din Drømmeterrasse?
        </h2>
        <p className="text-lg mb-6">
          Ring til os på {PHONE_DISPLAY} for en gratis besigtigelse og få et uforpligtende tilbud på din terrasse eller altan.
        </p>
        <a 
          href={`tel:${PHONE_LINK}`}
          className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Ring Nu for Gratis Besigtigelse
        </a>
      </section>
    </>
  );
};

export default TerrasseContent;
