
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Tegn På At Din Facade Har Brug For Renovering',
      excerpt: 'Lær at genkende de tidlige tegn på at din facade har brug for professionel opmærksomhed...',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Murer Silkeborg',
      date: '2024-01-15',
      slug: 'facade-renovering-tegn'
    },
    {
      id: 2,
      title: 'Sådan Vælger Du De Rigtige Fliser Til Dit Badeværelse',
      excerpt: 'En komplet guide til at vælge de perfekte fliser til dit badeværelsesprojekt...',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Murer Silkeborg',
      date: '2024-01-10',
      slug: 'vaelg-fliser-badevarelse'
    },
    {
      id: 3,
      title: 'Hvad Koster Det At Bygge En Tilbygning?',
      excerpt: 'Alt du skal vide om priser og faktorer der påvirker omkostningerne ved tilbygninger...',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Murer Silkeborg',
      date: '2024-01-05',
      slug: 'tilbygning-priser'
    },
    {
      id: 4,
      title: 'Vedligeholdelse Af Murværk - Praktiske Tips',
      excerpt: 'Få eksperttips til hvordan du holder dit murværk i topform år efter år...',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Murer Silkeborg',
      date: '2023-12-28',
      slug: 'murvaerk-vedligeholdelse'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Murer Blog
            </h1>
            <p className="text-xl text-gray-200">
              Tips, guides og ekspertviden om murværk, renovering og byggeprojekter 
              fra dit lokale murermesterteam i Silkeborg.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('da-DK')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <CardTitle className="font-montserrat text-lg line-clamp-2 group-hover:text-terracotta transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button asChild variant="outline" className="group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center">
                      Læs mere <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-4">
            Har du et murerprojekt i tankerne?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Få professionel rådgivning og et gratis tilbud på dit næste projekt.
          </p>
          <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90">
            <a href={`tel:${PHONE_LINK}`}>Ring {PHONE_DISPLAY}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
