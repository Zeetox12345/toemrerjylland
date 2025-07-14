
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, Share2, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuoteForm from '@/components/QuoteForm';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data
  const post = {
    title: '5 Tegn På At Din Facade Har Brug For Renovering',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      
      <h2>1. Revner i murværket</h2>
      <p>Revner i facaden kan være tegn på sætninger eller fugtproblemer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <h2>2. Fugerne falder ud</h2>
      <p>Når fugerne mellem murstenene bliver løse eller falder ud, er det tid til handling. Sed do eiusmod tempor incididunt ut labore.</p>
      
      <h2>3. Fugtpletter og algevækst</h2>
      <p>Fugtpletter på indersiden af vægge eller synlig algevækst på facaden er tydelige tegn. Ut enim ad minim veniam.</p>
      
      <h2>4. Afskallende maling eller puds</h2>
      <p>Hvis maling eller puds skaller af, kan det skyldes fugtproblemer bagved. Quis nostrud exercitation ullamco laboris.</p>
      
      <h2>5. Kold facade og høje varmeregninger</h2>
      <p>En kold facade kan være tegn på dårlig isolering. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <h2>Hvornår skal du handle?</h2>
      <p>Jo tidligere du får løst problemerne, jo billigere bliver det. Kontakt os for en gratis vurdering af din facade.</p>
    `,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    author: 'Murer Silkeborg',
    date: '2024-01-15',
    readTime: '5 min'
  };

  const relatedPosts = [
    {
      title: 'Sådan Vælger Du De Rigtige Fliser',
      slug: 'vaelg-fliser-badevarelse',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Tilbygning Priser - Komplet Guide',
      slug: 'tilbygning-priser',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const shareUrl = `https://murersilkeborg.dk/blog/${slug}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-terracotta">Forside</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/blog" className="text-gray-500 hover:text-terracotta">Blog</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-charcoal font-medium">{post.title}</span>
          </div>
        </div>
      </nav>

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-charcoal">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-6 text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('da-DK')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime} læsning</span>
                </div>
                
                {/* Featured Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
                />
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="border-t pt-8 mb-8">
                <h3 className="font-montserrat font-semibold text-lg mb-4 flex items-center">
                  <Share2 className="w-5 h-5 mr-2" />
                  Del dette indlæg
                </h3>
                <div className="flex space-x-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <section>
                <h3 className="font-montserrat font-bold text-2xl mb-6">Relaterede Indlæg</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-montserrat font-semibold mb-2">
                          {relatedPost.title}
                        </h4>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/blog/${relatedPost.slug}`}>Læs mere</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <Card className="shadow-lg sticky top-8">
                <CardHeader className="bg-terracotta text-white">
                  <CardTitle className="font-montserrat">Har du brug for hjælp?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Få professionel rådgivning om dit murerprojekt.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                      <a href={`tel:${PHONE_LINK}`}>Ring {PHONE_DISPLAY}</a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="#quote">Få gratis tilbud</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quote Form */}
              <QuoteForm title="Få gratis tilbud" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
