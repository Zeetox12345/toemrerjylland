
import React, { useState } from 'react';
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
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Manglende information",
        description: "Udfyld venligst alle påkrævede felter.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Send to leads@murersilkeborg.dk
    // TODO: Trigger optional webhook (Zapier) 
    console.log('Form submitted:', formData);
    
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
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className={`shadow-lg ${className}`}>
      <CardHeader className="bg-terracotta text-white">
        <CardTitle className="font-montserrat text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
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
          >
            <Send className="w-4 h-4 mr-2" />
            Send →
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
