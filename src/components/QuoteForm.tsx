
import React, { useState, useEffect, useRef, useId } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Mapping fra interne enum-værdier til læsevenlige labels til mailen
const PROJECT_SIZE_LABELS: Record<string, string> = {
  small: 'Lille projekt (under 50.000 kr)',
  medium: 'Mellem projekt (50.000-150.000 kr)',
  large: 'Stort projekt (over 150.000 kr)'
};

const WORK_TYPE_LABELS: Record<string, string> = {
  roofwork: 'Tagarbejde',
  extensions: 'Tilbygninger',
  renovations: 'Renoveringer',
  decks: 'Terrasser & Altaner'
};

interface QuoteFormProps {
  className?: string;
  title?: string;
}

const QuoteForm = ({ className = '', title = 'Få et uforpligtende tilbud nu' }: QuoteFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectSize: '',
    workType: '',
    name: '',
    phone: '',
    email: '',
    postalCode: '',
    city: '',
    message: ''
  });

  // (Fjernede attachments – EmailJS free tier understøtter ikke filupload)

  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration (set these in your .env file)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  /* -------------------------------------------------
     Sticky / floating submit button logic
  ------------------------------------------------- */
  const [showSticky, setShowSticky] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formId = useId();
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const rect = formRef.current.getBoundingClientRect();

      // Trigger after user har scrolled mere end 30% af viewport-højden
      const scrolledEnough = window.scrollY > window.innerHeight * 0.3;
      // Hvis selve submit-knappen (nederste del af formularen) er synlig, skjul sticky
      const bottomVisible = rect.bottom <= window.innerHeight;
      setShowSticky(scrolledEnough && !bottomVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.postalCode || !formData.city) {
      toast({
        title: "Manglende information",
        description: "Udfyld venligst alle påkrævede felter.",
        variant: "destructive"
      });
      return;
    }

    // Ensure EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Konfigurationsfejl",
        description: "Email-tjenesten er ikke sat korrekt op. Kontakt udvikleren.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      // emailjs.sendForm håndterer automatisk fil-vedhæftninger
      await emailjs.sendForm(serviceId, templateId, formRef.current as HTMLFormElement, publicKey);

      toast({
        title: "Tak for din henvendelse!",
        description: "Vi ringer dig op inden for 24 timer.",
        className: "bg-green-50 border-green-200"
      });

      // Reset form
      setFormData({
        projectSize: '',
        workType: '',
        name: '',
        phone: '',
        email: '',
        postalCode: '',
        city: '',
        message: ''
      });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Noget gik galt",
        description: "Kunne ikke sende formularen. Prøv venligst igen senere.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
    <Card className={`shadow-lg ${className}`}>
      <CardHeader className="bg-terracotta text-white">
        <CardTitle className="font-montserrat text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form ref={formRef} id={formId} onSubmit={handleSubmit} className="space-y-4">
          {/* Project Size */}
          <div>
            <Label htmlFor="project-size">Projektstørrelse</Label>
            <Select value={formData.projectSize} onValueChange={(value) => handleInputChange('projectSize', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Vælg størrelse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Lille projekt (under 50.000 kr)</SelectItem>
                <SelectItem value="medium">Mellem projekt (50.000-150.000 kr)</SelectItem>
                <SelectItem value="large">Stort projekt (over 150.000 kr)</SelectItem>
              </SelectContent>
            </Select>
            {/* Hidden felt med pæn label til EmailJS */}
            <input type="hidden" name="project_size" value={PROJECT_SIZE_LABELS[formData.projectSize] || ''} />
          </div>

          {/* Work Type */}
          <div>
            <Label>Type af arbejde</Label>
            <RadioGroup 
              name="work_type_raw"
              value={formData.workType} 
              onValueChange={(value) => handleInputChange('workType', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roofwork" id="roofwork" />
                <Label htmlFor="roofwork" className="text-sm">Tagarbejde</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extensions" id="extensions" />
                <Label htmlFor="extensions" className="text-sm">Tilbygninger</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="renovations" id="renovations" />
                <Label htmlFor="renovations" className="text-sm">Renoveringer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="decks" id="decks" />
                <Label htmlFor="decks" className="text-sm">Terrasser & Altaner</Label>
              </div>
            </RadioGroup>
            {/* Hidden felt med pæn label til EmailJS */}
            <input type="hidden" name="work_type" value={WORK_TYPE_LABELS[formData.workType] || ''} />
          </div>

          {/* Name */}
          <div>
            <Label htmlFor="name">Navn *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          {/* Postal code & City - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="postalCode">Postnr. *</Label>
              <Input
                id="postalCode"
                name="postal_code"
                type="text"
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="city">By *</Label>
              <Input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Attachments fjernet */}

          {/* Message */}
          <div>
            <Label htmlFor="message">Besked</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Beskriv dit projekt..."
              rows={3}
            />
          </div>

          {/* Hidden titel til brug i skabelonen (vi genbruger work type label) */}
          <input type="hidden" name="title" value={WORK_TYPE_LABELS[formData.workType] || ''} />

          <Button 
            type="submit" 
            className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-medium"
            ref={submitBtnRef}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sender..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Få et uforpligtende tilbud »
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>

    {/* Sticky floating button (mobile first) */}
    {showSticky && (
      <Button
        type="submit"
        form={formId}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-sm w-[90%] bg-terracotta hover:bg-terracotta/90 text-white font-semibold shadow-xl md:hidden z-50"
      >
        Få et uforpligtende tilbud »
      </Button>
    )}
    </>
  );
};

export default QuoteForm;
