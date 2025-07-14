
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Users, Award, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Index = () => {
  useEffect(() => {
    document.title = "Murer Silkeborg | Lokalt murermesterteam – Facader, Badeværelser & Flisearbejde";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Skal du bruge en erfaren murer i Silkeborg? Vi leverer alt fra facaderenovering til flisearbejde. Få et GRATIS og uforpligtende tilbud – ring +27 85 13 81 i dag!');
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-20">
            <div className="lg:col-span-2">
              <div className="animate-fade-in-up">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  Murer Silkeborg – Dit lokale, professionelle murermesterteam
                </h1>
                <h2 className="text-xl md:text-2xl mb-8 text-gray-200 font-medium max-w-3xl">
                  Drømmer du om et nyt badeværelse, en solid tilbygning eller en facaderenovering, der holder i årtier? Hos Murer Silkeborg får du specialiseret murerarbejde udført efter de højeste faglige standarder. Vi kombinerer traditionelle teknikker med moderne løsninger – og vi står klar til at forvandle dine byggedrømme til virkelighed.
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
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-charcoal"
                  >
                    <a href="#services">Se Vores Services</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-terracotta">10+</div>
                    <div className="text-sm text-gray-300">Års erfaring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">500+</div>
                    <div className="text-sm text-gray-300">Projekter</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta">24t</div>
                    <div className="text-sm text-gray-300">Svartid</div>
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

      {/* Intro Copy Section */}
      <section className="py-12 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6 text-gray-700">
          <h2 className="font-montserrat font-bold text-2xl text-charcoal">Hvorfor vælge en lokal murer i Silkeborg?</h2>
          <p>
            Silkeborgs særlige klimaforhold stiller krav til alt fra fugtsikring til materialevalg. Som lokal murermester kender vi de gældende byggestandarder, myndighedskrav og de typiske murstenstyper i området. Det betyder mere holdbare løsninger, færre overraskelser og kort responstid, når du kontakter os på {PHONE_DISPLAY}.
          </p>

          <h2 className="font-montserrat font-bold text-2xl text-charcoal">Vores kerneydelser</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Ydelse</th>
                  <th className="px-4 py-2">Typiske opgaver</th>
                  <th className="px-4 py-2">Fordele</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Facaderenovering</td>
                  <td className="px-4 py-2">Vandskuring, omfugning, netpuds</td>
                  <td className="px-4 py-2">Forlænger levetiden, reducerer varmetab</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Badeværelses­renovering</td>
                  <td className="px-4 py-2">Nyt vådrum, fliseopsætning, gulvvarme</td>
                  <td className="px-4 py-2">Øger boligværdien, bedre fugtsikring</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Tilbygninger & Nybyg</td>
                  <td className="px-4 py-2">Garage, udestue, ekstra etage</td>
                  <td className="px-4 py-2">Skræddersyede løsninger, byggestyring</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 font-medium">Flisearbejde Silkeborg</td>
                  <td className="px-4 py-2">Køkken­fliser, klinker, natursten</td>
                  <td className="px-4 py-2">Millimeterpræcision, slidstærke fuger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Vores Specialer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder professionelle murerløsninger til både private og erhvervskunder i Silkeborg og omegn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Facaderenovering',
                description: 'Professionel renovering af facader med fokus på kvalitet og holdbarhed.',
                image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: '/services/facaderenovering'
              },
              {
                title: 'Badeværelsesrenovering',
                description: 'Komplette badeværelsesrenovering og professionelt flisearbejde.',
                image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: '/services/badevaerelsesrenovering'
              },
              {
                title: 'Flisearbejde',
                description: 'Eksperter i fliser & klinker – skarpe linjer og holdbare fuger.',
                image: 'https://images.unsplash.com/photo-1556911220-bff31c12ad06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                link: '/services/flisearbejde'
              }
            ].map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Murer Silkeborg`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary">
                      <Link to={service.link}>
                        Læs mere <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Få Tilbud</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Sådan Arbejder Vi
            </h2>
            <p className="text-lg text-gray-600">
              En simpel og gennemsigtig proces fra første kontakt til færdigt projekt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Kontakt', description: 'Ring eller skriv til os for en uforpligtende snak' },
              { icon: Users, title: 'Besigtigelse', description: 'Vi kommer ud og ser på opgaven - gratis og uforpligtende' },
              { icon: CheckCircle, title: 'Tilbud', description: 'Du får et detaljeret tilbud inden for 24 timer' },
              { icon: Award, title: 'Udførelse', description: 'Vi udfører arbejdet professionelt og til tiden' }
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

      {/* Testimonials */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
              Hvad Siger Vores Kunder
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lars Hansen',
                location: 'Silkeborg',
                text: 'Fantastisk arbejde med vores nye badeværelse. Professionelt team og høj kvalitet. TODO: Real testimonial',
                rating: 5
              },
              {
                name: 'Anne Pedersen',
                location: 'Them',
                text: 'Hurtig og effektiv facaderenovering. Meget tilfreds med resultatet og prisen. TODO: Real testimonial',
                rating: 5
              },
              {
                name: 'Michael Sørensen',
                location: 'Silkeborg',
                text: 'Pålidelige håndværkere der holder deres aftaler. Kan varmt anbefales! TODO: Real testimonial',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
                Ofte Stillede Spørgsmål
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Hvor hurtigt kan I starte på mit projekt?',
                  answer: 'Det afhænger af projektets størrelse og vores nuværende booking. Typisk kan vi starte inden for 1-2 uger for mindre projekter og 2-4 uger for større renoveringer.'
                },
                {
                  question: 'Giver I garanti på jeres arbejde?',
                  answer: 'Ja, vi giver 5 års garanti på alt murværk og 2 års garanti på flisearbejde. Derudover er vi medlemmer af BygGaranti.'
                },
                {
                  question: 'Laver I også arbejde i weekenden?',
                  answer: 'Vi arbejder primært på hverdage, men kan i særlige tilfælde arrangere weekendarbejde. Dette aftales individuelt og kan medføre ekstra omkostninger.'
                },
                {
                  question: 'Hvad koster det at få lavet et tilbud?',
                  answer: 'Alle vores tilbud er gratis og uforpligtende. Vi kommer gerne ud og ser på opgaven uden det koster dig noget.'
                },
                {
                  question: 'Arbejder I kun i Silkeborg?',
                  answer: 'Vi dækker primært Silkeborg og omegn, inklusiv Them, Ry, Gjern og andre nærliggende områder. Kontakt os for at høre om vi dækker dit område.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="font-medium text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-off-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">BygGaranti</div>
              <div className="text-sm text-gray-600">Medlem</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">10+</div>
              <div className="text-sm text-gray-600">Års erfaring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">Autoriseret</div>
              <div className="text-sm text-gray-600">Murermester</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-terracotta">Forsikret</div>
              <div className="text-sm text-gray-600">Arbejde</div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Murer Silkeborg",
            "description": "Professionel murermester i Silkeborg med speciale i facaderenovering, badeværelser og flisearbejde",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Murer Silkeborg",
              "telephone": PHONE_LINK,
              "email": "info@murersilkeborg.dk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Silkeborg",
                "addressRegion": "Midtjylland",
                "addressCountry": "DK"
              }
            },
            "areaServed": "Silkeborg",
            "serviceType": "Murermester"
          })
        }}
      />
    </>
  );
};

export default Index;
