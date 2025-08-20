import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CityDropdownProps {
  isMobile?: boolean;
  onMobileClose?: () => void;
}

const CityDropdown: React.FC<CityDropdownProps> = ({ isMobile = false, onMobileClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const cities = [
    'Herning',
    'Holstebro',
    'Horsens',
    'Randers',
    'Silkeborg',
    'Viborg',
    'Grenaa',
    'Ringkøbing',
    'Skanderborg',
    'Hjørring',
    'Frederikshavn',
    'Hobro',
    'Thisted',
    'Nykøbing Mors',
    'Esbjerg',
    'Fredericia',
    'Kolding',
    'Svendborg',
    'Sønderborg',
    'Vejle',
    'Aabenraa',
    'Haderslev',
    'Middelfart',
    'Nyborg',
    'Varde'
  ];

  // Map city names to normalized URL slugs
  const cityUrlMap: Record<string, string> = {
    'Ringkøbing': 'ringkoebing',
    'Hjørring': 'hjoerring',
    'Nykøbing Mors': 'nykoebing-mors',
    'Sønderborg': 'soenderborg',
    'Aabenraa': 'aabenraa'
  };

  const getUrlSlug = (cityName: string): string => {
    return cityUrlMap[cityName] || cityName.toLowerCase().replace(/ /g, '-');
  };

  const handleCityClick = () => {
    setIsOpen(false);
    if (onMobileClose) {
      onMobileClose();
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (isMobile) {
    return (
      <div className="space-y-2">
        <div className="flex items-center py-3 text-lg border-b border-gray-100">
          <MapPin className="w-5 h-5 mr-3 text-terracotta" />
          <span className="font-medium text-charcoal">Byer</span>
        </div>
        <div className="ml-8 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {cities.map((city) => (
            <Link
              key={city}
              to={`/toemrer-${getUrlSlug(city)}`}
              className="block py-2 text-gray-600 hover:text-terracotta transition-colors duration-200"
              onClick={handleCityClick}
            >
              Tømrer {city}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center space-x-1 text-charcoal hover:text-terracotta transition-colors duration-200 font-medium"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MapPin className="w-4 h-4" />
        <span>Byer</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div
          className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-md z-50 min-w-48"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/toemrer-${getUrlSlug(city)}`}
                className="block px-4 py-2 text-sm text-charcoal hover:bg-gray-50 hover:text-terracotta transition-colors duration-200 whitespace-nowrap"
                onClick={handleCityClick}
              >
                Tømrer {city}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
