
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, CheckCircle, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuoteForm from '@/components/QuoteForm';

const ServiceDetail = () => {
  const { slug } = useParams();

  const services = {
    'facaderenovering': {
      title: 'Facaderenovering',
      description: 'Professionel renovering af facader med fokus på kvalitet og holdbarhed',
      heroImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      benefits: [
        'Øget værdi på din ejendom',
        'Bedre isolering og energibesparelse',
        'Beskyttelse mod fugt og vejrlig',
        'Moderne og flot udseende'
      ],
      priceFactors: [
        'Facadens størrelse og tilstand',
        'Type af materialer',
        'Kompleksitet af arbejdet',
        'Stilladsbehov'
      ],
      timeline: '2-6 uger afhængig af projekt størrelse'
    },
    'badevarelse': {
      title: 'Badeværelse & Fliser',
      description: 'Komplette badeværelsesrenovering og professionelt flisearbejde',
      heroImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      benefits: [
        'Vandtæt og holdbar løsning',
        'Moderne design og funktionalitet',
        'Øget komfort og værdi',
        'Professionelt håndværk'
      ],
      priceFactors: [
        'Badeværelsets størrelse',
        'Valg af fliser og materialer',
        'VVS-arbejde inkluderet',
        'Kompleksitet af layout'
      ],
      timeline: '1-3 uger for standard badeværelse'
    },
    'tilbygninger': {
      title: 'Tilbygninger',
      description: 'Murværk til tilbygninger, carporte og andre byggeprojekter',
      heroImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      benefits: [
        'Ekstra plads til familien',
        'Professionelt fundament',
        'Kvalitetsmurværk',
        'Øget boligværdi'
      ],
      priceFactors: [
        'Størrelse af tilbygning',
        'Fundamentsarbejde',
        'Materialevalg',
        'Terrænforhold'
      ],
      timeline: '3-8 uger afhængig af størrelse'
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service ikke fundet</div>;
  }

  return (
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
              <a href="tel:+4570806040" className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Ring på 70 80 60 40
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
                      <a href="tel:+4570806040">Ring 70 80 60 40</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:info@murersilkeborg.dk">Send email</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
