
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileCallButton = () => {
  return (
    <div className="sm:hidden fixed-call-button">
      <Button
        asChild
        size="lg"
        className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full w-14 h-14 shadow-lg"
      >
        <a href="tel:+4570806040" aria-label="Ring nu">
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default MobileCallButton;
