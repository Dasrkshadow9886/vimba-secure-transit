
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-vimba-green" />
            <span className="text-xl font-bold text-vimba-blue">Vimba Agency</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${location.pathname === '/' ? 'text-vimba-green' : 'text-gray-600 hover:text-vimba-green'}`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`font-medium ${location.pathname === '/how-it-works' ? 'text-vimba-green' : 'text-gray-600 hover:text-vimba-green'}`}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className={`font-medium ${location.pathname === '/dashboard' ? 'text-vimba-green' : 'text-gray-600 hover:text-vimba-green'}`}
            >
              Dashboard
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-vimba-green text-vimba-green hover:text-vimba-green">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-vimba-green hover:bg-vimba-green/90">
                Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
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
              className={`block py-2 px-3 rounded-md ${location.pathname === '/' ? 'bg-vimba-lightblue text-vimba-blue' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`block py-2 px-3 rounded-md ${location.pathname === '/how-it-works' ? 'bg-vimba-lightblue text-vimba-blue' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className={`block py-2 px-3 rounded-md ${location.pathname === '/dashboard' ? 'bg-vimba-lightblue text-vimba-blue' : 'text-gray-600'}`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-vimba-green text-vimba-green hover:text-vimba-green">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" className="block" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-vimba-green hover:bg-vimba-green/90">
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
