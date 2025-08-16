import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Users, Award, Star, ChevronRight, MapPin, Hammer, Home, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const ToemmrerSilkeborg = () => {
  useEffect(() => {
    document.title = "Tømrer Silkeborg | Lokalt tømrerteam – Tag, Tilbygninger & Renoveringer";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Skal du bruge en erfaren tømrer i Silkeborg? Vi leverer alt fra tagarbejde til tilbygninger og renoveringer. Få et GRATIS og uforpligtende tilbud – ring +45 27 85 13 81 i dag!');
    }
  }, []);

  const localServices = [
    {
      title: 'Tagarbejde Silkeborg',
      description: 'Specialister i tagarbejde tilpasset Silkeborgs klima og byggeregler.',
      icon: Home,
      features: ['Ny tagbelægning', 'Tagreparationer', 'Tagrender', 'Storm-/vejrskader'],
      link: '/services/tagarbejde'
    },
    {
      title: 'Tilbygninger Silkeborg',
      description: 'Fra garage til orangeri - vi kender Silkeborg Kommunes byggebestemmelser.',
      icon: Hammer,
      features: ['Garage', 'Orangeri', 'Udestue', 'Ekstra værelser'],
      link: '/services/tilbygninger'
    },
    {
      title: 'Renoveringer Silkeborg',
      description: 'Totalrenoveringer af ældre Silkeborg-huse med respekt for arkitekturen.',
      icon: Wrench,
      features: ['Køkkenrenovering', 'Badrenovering', 'Energiforbedringer', 'Tømmererstatning'],
      link: '/services/renoveringer'
    }
  ];

  const silkeborgFAQ = [
    {
      question: "Hvor hurtigt kan I være i Silkeborg?",
      answer: "Som lokalt team i Jylland kan vi typisk være i Silkeborg inden for 1-2 timer ved akutte opgaver. Planlagte projekter starter normalt inden for 1-2 uger."
    },
    {
      question: "Kender I Silkeborg Kommunes byggebestemmelser?",
      answer: "Ja, vi arbejder regelmæssigt med Silkeborg Kommune og kender deres specifikke krav til byggetilladelser, bevaringsværdige områder og lokalplanbestemmelser."
    },
    {
      question: "Hvad koster tømrerarbejde i Silkeborg?",
      answer: "Timepris: 475-550 kr. for standard tømrerarbejde. Komplette projekter prissættes efter besigtigelse. Ring for gratis prisoverslag på dit projekt."
    },
    {
      question: "Arbejder I også i omegnskommuner?",
      answer: "Ja, vi dækker hele Midtjylland inkl. Them, Ry, Skanderborg og Gjern. Kontakt os for at høre om serviceområde for dit projekt."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/mason-2376322.jpg')"
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-20">
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-terracotta mr-2" />
                  <span className="text-terracotta font-semibold">Silkeborg & Omegn</span>
                </div>
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  Tømrer Silkeborg – Dit lokale tømrerteam
                </h1>
                <h2 className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-3xl">
                  Som lokalt forankret tømrerteam kender vi Silkeborgs særlige byggetekniske udfordringer – fra søklima til kommunale bestemmelser. Vi leverer kvalitetstømrering med hurtigt respons og lokalt kendskab.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-charcoal font-semibold text-lg px-8 py-4"
                  >
                    <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Ring {PHONE_DISPLAY}
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-charcoal hover:bg-gray-100"
                  >
                    <a href="#services-silkeborg">Se Vores Services</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-terracotta">15+</div>
                    <div className="text-sm text-gray-300">År i Silkeborg</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">200+</div>
                    <div className="text-sm text-gray-300">Lokale projekter</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">1-2t</div>
                    <div className="text-sm text-gray-300">Responstid</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sticky Quote Form */}
            <div className="lg:block">
              <div className="sticky-form">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro Section */}
      <section className="py-12 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-4xl space-y-6 text-gray-700">
          <h2 className="font-montserrat font-bold text-2xl text-charcoal">Hvorfor vælge lokalt tømrerteam i Silkeborg?</h2>
          <p>
            Silkeborgs placering ved søerne stiller særlige krav til byggeri - fra fugtbehandling til materialevalg. Som lokalt tømrerteam kender vi udfordringerne med søklima, kommunens byggebestemmelser i områder som Papirfabrikken og Laven, samt de karakteristiske trætyper der holder bedst i Midtjyllands vejrforhold.
          </p>

          <h3 className="font-montserrat font-bold text-xl text-charcoal">Vores fordele som lokalt tømrerteam:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Lokalt kendskab:</strong> Vi kender Silkeborgs byggestil og kommunale krav</li>
            <li><strong>Hurtig responstid:</strong> 1-2 timer til akutte opgaver i Silkeborg</li>
            <li><strong>Leverandørnetværk:</strong> Tætte relationer til træhandlere i området</li>
            <li><strong>Referencer:</strong> Mange tilfredse kunder i Silkeborg og omegn</li>
          </ul>
            </div>
            
            {/* Mason image */}
            <div className="lg:order-first">
              <img
                src="/mason-2376322.jpg"
                alt="Professionel tømrer i arbejde - Tømrer Silkeborg"
                className="rounded-lg shadow-lg w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services for Silkeborg */}
      <section id="services-silkeborg" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Tømrerservice i Silkeborg
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialiserede tømrerløsninger tilpasset Silkeborgs lokale forhold og byggetekniske udfordringer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-terracotta rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                    <Link to={service.link}>Læs mere om {service.title.replace(' Silkeborg', '')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Pricing Table */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl mb-8 text-center text-charcoal">
              Tømrer Priser Silkeborg
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-200 text-sm bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Ydelse</th>
                    <th className="px-4 py-3">Typisk varighed</th>
                    <th className="px-4 py-3">Ca. pris Silkeborg*</th>
                    <th className="px-4 py-3">Særlige forhold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Tagreparation</td>
                    <td className="px-4 py-3">1-3 dage</td>
                    <td className="px-4 py-3">12.000-35.000 kr.</td>
                    <td className="px-4 py-3">Ekstra vejrforsegning pga. søklima</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Garage (30 m²)</td>
                    <td className="px-4 py-3">2-3 uger</td>
                    <td className="px-4 py-3">180.000-250.000 kr.</td>
                    <td className="px-4 py-3">Inkl. kommunal byggesag</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Køkkenrenovering</td>
                    <td className="px-4 py-3">1-2 uger</td>
                    <td className="px-4 py-3">85.000-150.000 kr.</td>
                    <td className="px-4 py-3">Fugtbehandling af ældre huse</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium">Træterrasse (25 m²)</td>
                    <td className="px-4 py-3">3-5 dage</td>
                    <td className="px-4 py-3">35.000-55.000 kr.</td>
                    <td className="px-4 py-3">Drænage pga. højt grundvand</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm italic text-gray-600">*Priserne er vejledende og afhænger af konkrete forhold. Kontakt os for præcist tilbud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Sådan Forløber Dit Projekt i Silkeborg
            </h2>
            <p className="text-lg text-gray-600">
              En professionel og gennemsigtig proces fra første kontakt til færdigt tømrerarbejde.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Ring til os', description: 'Kontakt os på ' + PHONE_DISPLAY + ' for en uforpligtende snak om dit projekt' },
              { icon: MapPin, title: 'Lokal besigtigelse', description: 'Vi kommer til Silkeborg og omegn - typisk samme eller næste dag' },
              { icon: CheckCircle, title: 'Skriftligt tilbud', description: 'Detaljeret tilbud med fast pris og realistisk tidsplan inden 24 timer' },
              { icon: Award, title: 'Faglig udførelse', description: 'Professionelt tømrerarbejde med løbende kommunikation og oprydning' }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for Silkeborg */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl mb-8 text-center text-charcoal">
              Ofte Stillede Spørgsmål - Silkeborg
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {silkeborgFAQ.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4 bg-white">
                  <AccordionTrigger className="font-medium text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-terracotta text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-4">
            Klar til at starte dit tømrerprojekt i Silkeborg?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Som dit lokale tømrerteam i Silkeborg står vi klar med faglig ekspertise og hurtigt respons. 
            Ring til os i dag for en uforpligtende snak om dit projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-terracotta hover:bg-gray-100 font-semibold"
            >
              <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Ring {PHONE_DISPLAY} nu
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-terracotta"
            >
              <Link to="/kontakt">Send besked</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToemmrerSilkeborg;
