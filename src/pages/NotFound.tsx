
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <Shield className="inline-block h-16 w-16 text-vimba-green mb-4" />
          <h1 className="text-5xl font-bold text-vimba-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page has gone missing.</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-vimba-green hover:bg-vimba-green/90">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
