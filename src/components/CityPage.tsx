import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Users, Award, Star, ChevronRight, MapPin, Hammer, Home, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";
import { generateCityContent, CityContent } from '@/lib/cityContentGenerator';

interface CityPageProps {
  citySlug: string;
}

const CityPage: React.FC<CityPageProps> = ({ citySlug }) => {
  const content: CityContent = generateCityContent(citySlug);
  // Convert normalized city names back to proper Danish characters for display
  const getDisplayCity = (slug: string): string => {
    const city = slug.replace('toemrer-', '').replace(/-/g, ' ');

    const displayMap: Record<string, string> = {
      'ringkoebing': 'Ringkøbing',
      'hjoerring': 'Hjørring',
      'nykoebing-mors': 'Nykøbing Mors',
      'soenderborg': 'Sønderborg',
      'aabenraa': 'Aabenraa'
    };

    return displayMap[city] || city.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const displayCity = getDisplayCity(citySlug);

  useEffect(() => {
    document.title = content.title;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute('content', content.metaDescription);
    }
  }, [content]);

  const localServices = content.services.map((service, index) => ({
    ...service,
    icon: [Home, Hammer, Wrench][index],
    link: ['/services/tagarbejde', '/services/tilbygninger', '/services/renoveringer'][index]
  }));

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
                  <span className="text-terracotta font-semibold">{displayCity} & Omegn</span>
                </div>
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  {content.heroTitle}
                </h1>
                <h2 className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-3xl">
                  {content.heroSubtitle}
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
                    <a href="#services-local">Se Vores Services</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-terracotta">15+</div>
                    <div className="text-sm text-gray-300">År i {displayCity}</div>
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
              <h2 className="font-montserrat font-bold text-2xl text-charcoal">Hvorfor vælge lokalt tømrerteam i {displayCity}?</h2>
              <p>
                {content.localIntro}
              </p>

              <h3 className="font-montserrat font-bold text-xl text-charcoal">Vores fordele som lokalt tømrerteam:</h3>
              <ul className="list-disc ml-6 space-y-2">
                {content.advantages.map((advantage, index) => (
                  <li key={index}><strong>{advantage.split(':')[0]}:</strong>{advantage.split(':')[1]}</li>
                ))}
              </ul>
            </div>

            {/* Mason image */}
            <div className="lg:order-first">
              <img
                src="/mason-2376322.jpg"
                alt={`Professionel tømrer i arbejde - Tømrer ${displayCity}`}
                className="rounded-lg shadow-lg w-full h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services for City */}
      <section id="services-local" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Tømrerservice i {displayCity}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialiserede tømrerløsninger tilpasset {displayCity}s lokale forhold og byggetekniske udfordringer.
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
                    <Link to={service.link}>Læs mere om {service.title.replace(` ${displayCity}`, '')}</Link>
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
              Tømrer Priser {displayCity}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-200 text-sm bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Ydelse</th>
                    <th className="px-4 py-3">Typisk varighed</th>
                    <th className="px-4 py-3">Ca. pris {displayCity}*</th>
                    <th className="px-4 py-3">Særlige forhold</th>
                  </tr>
                </thead>
                <tbody>
                  {content.pricingTable.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3 font-medium">{item.service}</td>
                      <td className="px-4 py-3">{item.duration}</td>
                      <td className="px-4 py-3">{item.price}</td>
                      <td className="px-4 py-3">{item.note}</td>
                    </tr>
                  ))}
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
              Sådan Forløber Dit Projekt i {displayCity}
            </h2>
            <p className="text-lg text-gray-600">
              En professionel og gennemsigtig proces fra første kontakt til færdigt tømrerarbejde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Ring til os', description: `Kontakt os på ${PHONE_DISPLAY} for en uforpligtende snak om dit projekt` },
              { icon: MapPin, title: 'Lokal besigtigelse', description: `Vi kommer til ${displayCity} og omegn - typisk samme eller næste dag` },
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

      {/* FAQ for City */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl mb-8 text-center text-charcoal">
              Ofte Stillede Spørgsmål - {displayCity}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {content.faq.map((item, idx) => (
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
            Klar til at starte dit tømrerprojekt i {displayCity}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Som dit lokale tømrerteam i {displayCity} står vi klar med faglig ekspertise og hurtigt respons.
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
                Ring {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-terracotta font-semibold transition-all duration-200"
            >
              <Link to="/kontakt">Send besked</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;
