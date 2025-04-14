
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vimba-black">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8 text-white">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">1. What Are Cookies</h2>
            <p className="mb-4">Cookies are small text files that are stored on your device when you visit our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-vimba-purple">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remember your login status</li>
              <li>Maintain your session security</li>
              <li>Analyze how you use our platform</li>
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

export default CookiePolicy;
