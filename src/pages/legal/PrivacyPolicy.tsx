
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vimba-black">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">1. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Government-issued ID for seller verification</li>
              <li>Transaction data</li>
              <li>Communication records between buyers and sellers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Facilitate secure transactions between buyers and sellers</li>
              <li>Verify seller identities</li>
              <li>Prevent fraud and scams</li>
              <li>Improve our services</li>
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
