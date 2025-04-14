
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vimba-black">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using Vimba Agency's services, you agree to be bound by these Terms of Service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">2. Escrow Services</h2>
            <p className="mb-4">Our platform provides escrow services for secure transactions between buyers and sellers. Funds are held safely until both parties confirm the successful completion of the transaction.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">3. Seller Verification</h2>
            <p className="mb-4">Sellers must complete our verification process, including providing valid government-issued ID and completing a liveness check.</p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
