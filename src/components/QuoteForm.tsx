
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

  // Separate state for file attachments (optional)
  const [attachments, setAttachments] = useState<FileList | null>(null);

  /* -------------------------------------------------
     Sticky / floating submit button logic
  ------------------------------------------------- */
  const [showSticky, setShowSticky] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const formId = useId();
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);

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

  /* -------------------------------------------------
     Auto-scroll form to submit button when essential
     fields are filled the first time
  ------------------------------------------------- */
  useEffect(() => {
    if (!hasAutoScrolled && formData.projectSize && formData.workType && submitBtnRef.current) {
      submitBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHasAutoScrolled(true);
    }
  }, [formData.projectSize, formData.workType, hasAutoScrolled]);

  const handleSubmit = (e: React.FormEvent) => {
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

    // TODO: Send to leads@murersilkeborg.dk
    // TODO: Trigger optional webhook (Zapier) 
    console.log('Form submitted:', {
      ...formData,
      attachments,
    });
    
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
    setAttachments(null);
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
          </div>

          {/* Work Type */}
          <div>
            <Label>Type af arbejde</Label>
            <RadioGroup 
              value={formData.workType} 
              onValueChange={(value) => handleInputChange('workType', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="facade" id="facade" />
                <Label htmlFor="facade" className="text-sm">Facaderenovering</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bathroom" id="bathroom" />
                <Label htmlFor="bathroom" className="text-sm">Badeværelse & Fliser</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extension" id="extension" />
                <Label htmlFor="extension" className="text-sm">Tilbygninger</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="repair" id="repair" />
                <Label htmlFor="repair" className="text-sm">Reparationer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Name */}
          <div>
            <Label htmlFor="name">Navn *</Label>
            <Input
              id="name"
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
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Attachments */}
          <div>
            <Label htmlFor="attachments">Vedhæft filer/billeder</Label>
            <Input
              id="attachments"
              type="file"
              multiple
              accept="image/*,application/pdf"
              onChange={(e) => setAttachments(e.target.files)}
            />
            <p className="text-xs text-gray-500 mt-1">Acceptér billeder (jpg, png) eller PDF-dokumenter. Maks. 10&nbsp;MB pr. fil.</p>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Besked</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Beskriv dit projekt..."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-medium"
            ref={submitBtnRef}
          >
            <Send className="w-4 h-4 mr-2" />
            Få et uforpligtende tilbud »
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
