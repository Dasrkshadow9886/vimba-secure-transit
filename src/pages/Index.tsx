
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Secure Your Transactions, Protect Your Deals</h1>
              <p className="text-xl mb-8 max-w-md">
                Safeguard every transaction with our trusted escrow service. We bridge trust between buyers and sellers, ensuring secure and confident online exchanges.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button className="bg-white text-vimba-blue hover:bg-gray-100 text-lg px-8 py-6">
                    Start Protecting Your Deals
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                    How We Protect You
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
                <div className="text-center mb-6">
                  <Globe className="inline-block h-16 w-16 text-vimba-purple mb-4" />
                  <h2 className="text-vimba-blue text-2xl font-bold">Integrated Solutions</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-vimba-lightblue rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Layers className="h-6 w-6 text-vimba-purple" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Unified Management</h3>
                      <p className="text-sm text-gray-600">Centralize your tools and resources</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Zap className="h-6 w-6 text-vimba-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Efficient Workflows</h3>
                      <p className="text-sm text-gray-600">Optimize your productivity</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Globe className="h-6 w-6 text-vimba-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-vimba-blue">Global Collaboration</h3>
                      <p className="text-sm text-gray-600">Connect with teams worldwide</p>
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
            <h2 className="text-3xl font-bold text-vimba-blue mb-4">Trust at the Core of Every Transaction</h2>
            <p className="text-gray-600">Your financial safety is our top priority. We create secure bridges between buyers and sellers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Integrated Tools</h3>
              <p className="text-gray-600">Seamlessly connect and manage all your essential tools in one place.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Boost Productivity</h3>
              <p className="text-gray-600">Streamline your workflow with intelligent automation and smart integrations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-vimba-lightblue rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-vimba-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-vimba-blue">Global Collaboration</h3>
              <p className="text-gray-600">Connect and collaborate with teams across different time zones and locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="py-16 bg-vimba-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Uncertainty into Confidence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Stop worrying about online transaction risks. Join Vimba and experience secure, worry-free exchanges.</p>
          <Link to="/signup">
            <Button className="bg-vimba-green hover:bg-vimba-green/90 text-white px-8 py-6 text-lg">
              Secure Your Next Deal
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
