
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vimba-black">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8 text-white">Disclaimer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">1. Limitation of Liability</h2>
            <p className="mb-4">While we strive to prevent fraud and ensure secure transactions, Vimba Agency is not liable for any losses incurred through the use of our platform.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">2. No Guarantees</h2>
            <p className="mb-4">While we implement robust security measures and verification processes, we cannot guarantee that all users are legitimate or that all transactions will be successful.</p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
