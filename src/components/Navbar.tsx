
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-vimba-black shadow-lg py-4 border-b border-vimba-purple/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/27277313-9433-4933-b124-e0abac08f5e4.png" 
              alt="Vimba Agency" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-vimba-purple' : 'text-gray-300 hover:text-vimba-purple'}`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`font-medium ${location.pathname === '/how-it-works' ? 'text-vimba-purple' : 'text-gray-300 hover:text-vimba-purple'}`}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className={`font-medium ${location.pathname === '/dashboard' ? 'text-vimba-purple' : 'text-gray-300 hover:text-vimba-purple'}`}
            >
              Dashboard
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-vimba-purple text-vimba-purple hover:text-vimba-purple-light">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-vimba-purple hover:bg-vimba-purple-light text-white">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 px-3 rounded-md ${location.pathname === '/' ? 'bg-vimba-purple/20 text-vimba-purple' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`block py-2 px-3 rounded-md ${location.pathname === '/how-it-works' ? 'bg-vimba-purple/20 text-vimba-purple' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className={`block py-2 px-3 rounded-md ${location.pathname === '/dashboard' ? 'bg-vimba-purple/20 text-vimba-purple' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-vimba-purple text-vimba-purple hover:text-vimba-purple-light">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" className="block" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-vimba-purple hover:bg-vimba-purple-light text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
