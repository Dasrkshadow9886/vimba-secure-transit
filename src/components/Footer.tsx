
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vimba-blue text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-vimba-green" />
              <span className="text-xl font-bold">Vimba</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              An all-in-one platform designed to streamline workflows, enhance collaboration, and boost productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-vimba-green transition">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-vimba-green transition">How It Works</Link></li>
              <li><Link to="/signup" className="text-gray-300 hover:text-vimba-green transition">Sign Up</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-vimba-green transition">Log In</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-vimba-green transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-vimba-green transition">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-300 hover:text-vimba-green transition">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-300 hover:text-vimba-green transition">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-vimba-green" />
                <span className="text-gray-300">support@vimbaagency.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-vimba-green" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Vimba. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">Empowering Teams, Simplifying Work</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
