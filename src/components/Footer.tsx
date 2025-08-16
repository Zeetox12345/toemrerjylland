
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/toemrerjylland_favicon-removebg-preview.png"
                alt="Tømrer Jylland Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-montserrat font-bold text-xl">
                Tømrer Jylland
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professionel tømrer i Jylland med speciale i tagarbejde, 
              tilbygninger og renoveringer. Vi leverer altid kvalitet til tiden.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-terracotta" />
                <a href={`tel:${PHONE_LINK}`} className="hover:text-terracotta transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-terracotta" />
                        <a href="mailto:infotoemrerjylland@gmail.com" className="hover:text-terracotta transition-colors">
          infotoemrerjylland@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>Jylland, Danmark</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Hurtiglinks</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-terracotta transition-colors">Forside</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-terracotta transition-colors">Services</Link></li>
              <li><Link to="/services/tagarbejde" className="text-gray-300 hover:text-terracotta transition-colors">Tagarbejde</Link></li>
              <li><Link to="/services/tilbygninger" className="text-gray-300 hover:text-terracotta transition-colors">Tilbygninger</Link></li>
              <li><Link to="/services/renoveringer" className="text-gray-300 hover:text-terracotta transition-colors">Renoveringer</Link></li>
              <li><Link to="/toemrer-silkeborg" className="text-gray-300 hover:text-terracotta transition-colors">Tømrer Silkeborg</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-terracotta transition-colors">Kontakt</Link></li>
              <li><Link to="/politik" className="text-gray-300 hover:text-terracotta transition-colors">Privatliv &amp; Cookies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Tagarbejde</span></li>
              <li><span className="text-gray-300">Tilbygninger</span></li>
              <li><span className="text-gray-300">Renoveringer</span></li>
              <li><span className="text-gray-300">Terrasser</span></li>
              <li><span className="text-gray-300">Energioptimering</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tømrer Jylland. Alle rettigheder forbeholdes.
            </p>
            {/* Removed privacy & cookies links as requested */}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center">
              toemrerjylland.dk formidler kontakt til autoriserede tømrere i Jylland. 
              Vi udfører ikke selv tømrerarbejde.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
