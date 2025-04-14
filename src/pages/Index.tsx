
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, ShieldCheck, Lock, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="vimba-gradient text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">We Stop Scammers</h1>
              <p className="text-xl mb-8 max-w-md">
                Secure escrow payments that protect both buyers and sellers in online transactions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button className="bg-white text-vimba-blue hover:bg-gray-100 text-lg px-8 py-6">
                    Get Started
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
                <div className="text-center mb-6">
                  <Shield className="inline-block h-16 w-16 text-vimba-green mb-4" />
                  <h2 className="text-vimba-blue text-2xl font-bold">Secure Transaction</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-vimba-lightblue rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Lock className="h-6 w-6 text-vimba-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Funds Secured</h3>
                      <p className="text-sm text-gray-600">Buyer's payment is secure</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <UserCheck className="h-6 w-6 text-vimba-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Seller Verified</h3>
                      <p className="text-sm text-gray-600">ID and liveness checked</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <ShieldCheck className="h-6 w-6 text-vimba-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Money Released</h3>
                      <p className="text-sm text-gray-600">When buyer confirms receipt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-vimba-blue mb-4">Safe Payments Every Time</h2>
            <p className="text-gray-600">Our escrow service holds funds until all parties are satisfied with the transaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Buyer Protection</h3>
              <p className="text-gray-600">Only pay when you've received exactly what you ordered and are satisfied with the purchase.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Seller Verification</h3>
              <p className="text-gray-600">All sellers undergo ID verification and liveness checks before they can receive payments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Secure Escrow</h3>
              <p className="text-gray-600">Your funds are held securely until the transaction is completed to everyone's satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="py-16 bg-vimba-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Trade with Confidence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Vimba Agency today and experience secure transactions that protect both buyers and sellers.</p>
          <Link to="/signup">
            <Button className="bg-vimba-green hover:bg-vimba-green/90 text-white px-8 py-6 text-lg">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
