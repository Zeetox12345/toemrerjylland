import React from 'react';
import { CheckCircle, AlertTriangle, Star, Clock } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const TagarbejdeContent = () => {
  return (
    <>
      {/* Intro section */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Professionelt Tagarbejde i Jylland
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Dit tag er dit hjems vigtigste forsvar mod vejret. I Jylland med de skiftende vejrforhold, 
          kraftige regnfald og stormvejr er det særligt vigtigt med et tag der holder. Vi er specialister 
          i tagarbejde og leverer holdbare løsninger tilpasset det jyske klima.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-800">Akutte tagskader?</h3>
              <p className="text-blue-700 text-sm mt-1">
                Ring til os på {PHONE_DISPLAY} ved akutte tagskader eller lækager. 
                Vi har beredskab og kan være der samme dag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vores tagarbejde services */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Vores Tagarbejde Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Nyt Tag</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Komplet ny tagbelægning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Nye tagspær og lægter</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Isolation og dampspærre</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tagrender og nedløb</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Pris:</strong> Fra 550-850 kr/m² inkl. materialer
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 text-charcoal">Tagreparationer</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Udskiftning af defekte tagsten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Reparation af tagrender</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Tætning af lækager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Rygreparationer</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Pris:</strong> Fra 2.500 kr for mindre reparationer
            </p>
          </div>
        </div>
      </section>

      {/* Materialer */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Tagmaterialer vi Arbejder Med
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Materiale</th>
                <th className="px-4 py-3 text-left">Fordele</th>
                <th className="px-4 py-3 text-left">Levetid</th>
                <th className="px-4 py-3 text-left">Ca. pris/m²</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Teglsten</td>
                <td className="px-4 py-3">Klassisk, holdbart, vejrbestandigt</td>
                <td className="px-4 py-3">40-60 år</td>
                <td className="px-4 py-3">180-350 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Betonsten</td>
                <td className="px-4 py-3">Prisbilligt, mange farver</td>
                <td className="px-4 py-3">30-40 år</td>
                <td className="px-4 py-3">120-250 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Stålplader</td>
                <td className="px-4 py-3">Let, moderne, hurtig montage</td>
                <td className="px-4 py-3">25-35 år</td>
                <td className="px-4 py-3">200-400 kr</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Fibercement</td>
                <td className="px-4 py-3">Miljøvenligt, god pris</td>
                <td className="px-4 py-3">20-30 år</td>
                <td className="px-4 py-3">150-280 kr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Proces */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Sådan Forløber dit Tagprojekt
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold">Besigtigelse</h3>
                <p className="text-sm text-gray-600">Gratis besigtigelse og opmåling af dit tag</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold">Tilbud</h3>
                <p className="text-sm text-gray-600">Detaljeret tilbud med fast pris inden 24 timer</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold">Materialevalg</h3>
                <p className="text-sm text-gray-600">Hjælp til valg af tagmaterialer og farver</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold">Udførelse</h3>
                <p className="text-sm text-gray-600">Professionel udførelse med daglig oprydning</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold">Aflevering</h3>
                <p className="text-sm text-gray-600">Gennemgang og 5 års garanti på arbejdet</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
              <div>
                <h3 className="font-semibold">Service</h3>
                <p className="text-sm text-gray-600">Efterfølgende service og vedligeholdelse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vedligeholdelse */}
      <section className="space-y-6">
        <h2 className="font-montserrat font-bold text-2xl text-charcoal">
          Vedligeholdelse af dit Tag
        </h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Årlig Taginspektion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Forår: Check for stormskader</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Sommer: Kontroller tagrender for blade</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Efterår: Rens tagrender før frost</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Vinter: Check for ispropper</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-white rounded-lg p-8 text-center">
        <h2 className="font-montserrat font-bold text-2xl mb-4">
          Klar til dit Tagprojekt?
        </h2>
        <p className="text-lg mb-6">
          Ring til os på {PHONE_DISPLAY} for en gratis besigtigelse og få et uforpligtende tilbud på dit tagarbejde.
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

export default TagarbejdeContent;
