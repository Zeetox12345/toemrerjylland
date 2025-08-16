
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, CheckCircle, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";
import TagarbejdeContent from "@/components/TagarbejdeContent";
import TilbygningContent from "@/components/TilbygningContent";
import RenoveringContent from "@/components/RenoveringContent";
import TerrasseContent from "@/components/TerrasseContent";
import SEOHead from "@/components/SEOHead";

interface ServiceData {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  priceFactors: string[];
  timeline: string;
  seoTitle?: string;
  seoDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const ServiceDetail = () => {
  const { slug } = useParams();

  const services: Record<string, ServiceData> = {
    'tagarbejde': {
      title: 'Tagarbejde',
      description: 'Professionelt tagarbejde med fokus på kvalitet og vejrbestandighed',
      heroImage: '/mason-2376322.jpg',
      benefits: [
        'Beskytter dit hjem mod vejret',
        'Øget værdi på din ejendom',
        'Bedre isolering og energibesparelse',
        'Moderne og holdbart materiale'
      ],
      priceFactors: [
        'Tagets størrelse og hældning',
        'Type af tagmaterialer',
        'Kompleksitet af tagkonstruktion',
        'Stilladsbehov og adgangsforhold'
      ],
      timeline: '3-10 dage afhængig af projekt størrelse',
      seoTitle: 'Tagarbejde Jylland | Nyt tag, reparationer & tagrender – Få tilbud',
      seoDescription: 'Professionelt tagarbejde i Jylland: nyt tag, reparationer og tagrender. Beskyt dit hjem med kvalitet fra erfarne tømrere. Gratis besigtigelse – ring +45 23 45 67 89.',
      ogTitle: 'Tagarbejde Jylland | Eksperter i holdbare tagløsninger',
      ogDescription: 'Få et stærkt, vejrbestandigt tag. Vi tilbyder tagarbejde i hele Jylland. Ring +45 23 45 67 89 for gratis rådgivning.'
    },
    'tilbygninger': {
      title: 'Tilbygninger',
      description: 'Komplette tilbygninger fra idé til nøglefærdig løsning',
      heroImage: '/tilbygninger.jpg',
      benefits: [
        'Mere plads til familien',
        'Øget boligværdi betydeligt',
        'Skræddersyet til dine behov',
        'Professionel projektstyring'
      ],
      priceFactors: [
        'Størrelse af tilbygning',
        'Fundamentsarbejde og terræn',
        'Materialevalg og finish',
        'Kompleksitet af konstruktion'
      ],
      timeline: '3-8 uger afhængig af størrelse',
      seoTitle: 'Tilbygninger Jylland | Garage, Orangeri & Udestue – Fast pris',
      seoDescription: 'Drømmer du om mere plads? Vi designer og opfører tilbygninger i Jylland: garage, orangeri, udestue og ekstra værelser. Gratis skitseforslag – ring +45 23 45 67 89.',
      ogTitle: 'Tilbygninger Jylland – Eksperter i udvidelse af hjemmet',
      ogDescription: 'Professionelle tilbygninger i Jylland: fra idé til nøglefærdig løsning. Kontakt +45 23 45 67 89 for gratis rådgivning.'
    },
    'renoveringer': {
      title: 'Renoveringer',
      description: 'Totalrenoveringer af køkken, bad og hele boliger',
      heroImage: '/facaderenovering.jpg',
      benefits: [
        'Moderne og funktionelt design',
        'Energioptimering og besparelser',
        'Øget komfort og livskvalitet',
        'Betydelig værditilvækst'
      ],
      priceFactors: [
        'Omfang af renovering',
        'Kvalitet af materialer',
        'Kompleksitet af installationer',
        'Bevaringsværdige elementer'
      ],
      timeline: '2-8 uger afhængig af omfang',
      seoTitle: 'Renoveringer Jylland | Køkken, bad & totalrenovering – Få tilbud',
      seoDescription: 'Totalrenovering i Jylland: køkken, badeværelse og hele boliger. Moderne design og energioptimering. Gratis rådgivning – ring +45 23 45 67 89.',
      ogTitle: 'Renoveringer Jylland – Forvandl dit hjem',
      ogDescription: 'Professionelle renoveringer i Jylland med fokus på kvalitet og design. Kontakt +45 23 45 67 89 for gratis konsultation.'
    },
    'terrasser': {
      title: 'Terrasser & Altaner',
      description: 'Træterrasser, altaner og pergola i højeste kvalitet',
      heroImage: '/terrasser.jpg',
      benefits: [
        'Udvidet udendørs opholdsområde',
        'Øget boligværdi og attraktivitet',
        'Holdbare og vejrbestandige materialer',
        'Skræddersyet design til din have'
      ],
      priceFactors: [
        'Størrelse og design af terrasse',
        'Valg af trætype og behandling',
        'Fundamentering og terræn',
        'Ekstrafunktioner som gelænder og trin'
      ],
      timeline: '2-5 dage afhængig af størrelse',
      seoTitle: 'Træterrasser Jylland | Altaner & Pergola – Få fast pris',
      seoDescription: 'Smukke træterrasser og altaner i Jylland. Kvalitetstræ og fagmandsmæssig udførelse. Gratis opmåling og tilbud – ring +45 23 45 67 89.',
      ogTitle: 'Træterrasser Jylland – Skab dit drømme-uderum',
      ogDescription: 'Professionelle træterrasser og altaner i Jylland. Holdbare materialer og smukt håndværk. Kontakt +45 23 45 67 89 for tilbud.'
    }
  };

  const service = services[slug as keyof typeof services];



  if (!service) {
    return <div>Service ikke fundet</div>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Tømrer Jylland",
      "telephone": "+45278513881",
      "email": "infotoemrerjylland@gmail.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Jylland, Denmark"
    },
    "serviceType": service.title,
    "image": `https://toemrerjylland.dk${service.heroImage}`
  };

  return (
    <>
      <SEOHead
        title={service.seoTitle ?? `${service.title} Jylland | Tømrer Jylland`}
        description={service.seoDescription ?? service.description}
        ogTitle={service.ogTitle}
        ogDescription={service.ogDescription ?? service.seoDescription}
        ogImage={`https://toemrerjylland.dk${service.heroImage}`}
        canonicalUrl={`https://toemrerjylland.dk/services/${slug}`}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-terracotta">Forside</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/services" className="text-gray-500 hover:text-terracotta">Services</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-charcoal font-medium">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div 
          className="h-64 md:h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-charcoal/70"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-white max-w-2xl">
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-200">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Banner */}
      <section className="bg-terracotta text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="font-montserrat font-semibold text-xl mb-2">
                Få et gratis tilbud på din {service.title.toLowerCase()}
              </h2>
              <p className="text-gray-100">Ring til os nu - vi svarer inden for 24 timer</p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-terracotta hover:bg-gray-100 mt-4 md:mt-0"
            >
              <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Ring på {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Benefits */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Fordele ved {service.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Factors */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Hvad Påvirker Prisen?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.priceFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Euro className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-6">
                  Tidsplan
                </h2>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{service.timeline}</span>
                </div>
              </div>

              {/* Inline Quote Form */}
              <div className="lg:hidden">
                <QuoteForm title={`Få tilbud på ${service.title.toLowerCase()}`} />
              </div>

              {/* SEO Rich Content */}
              {slug === 'tagarbejde' && (
                <div className="space-y-12">
                  <TagarbejdeContent />
                </div>
              )}

              {slug === 'tilbygninger' && (
                <div className="space-y-12">
                  <TilbygningContent />
                </div>
              )}

              {slug === 'renoveringer' && (
                <div className="space-y-12">
                  <RenoveringContent />
                </div>
              )}

              {slug === 'terrasser' && (
                <div className="space-y-12">
                  <TerrasseContent />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Sticky Quote Form - Desktop */}
              <div className="hidden lg:block sticky top-8">
                <QuoteForm title={`Få tilbud på ${service.title.toLowerCase()}`} />
              </div>

              {/* Additional Info Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-montserrat">Har du spørgsmål?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Vi er altid klar til at svare på dine spørgsmål om {service.title.toLowerCase()}.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                      <a href={`tel:${PHONE_LINK}`}>Ring {PHONE_DISPLAY}</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:infotoemrerjylland@gmail.com">Send email</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServiceDetail;
