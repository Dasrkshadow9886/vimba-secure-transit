
import React from 'react';
import { ShieldCheck, PackageCheck, CreditCard, UserCheck, BadgeCheck } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-vimba-lightblue to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vimba-blue mb-4">How Vimba Agency Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our secure escrow service protects both buyers and sellers in every transaction, ensuring money only changes hands when everyone is satisfied.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-vimba-lightblue flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-vimba-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-vimba-blue">1. Buyer Deposits Funds</h3>
            <p className="text-gray-600">The buyer creates a transaction and securely deposits funds into our escrow service.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-vimba-lightblue flex items-center justify-center mb-4">
              <PackageCheck className="h-8 w-8 text-vimba-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-vimba-blue">2. Seller Ships Product</h3>
            <p className="text-gray-600">The seller is notified and ships the product to the buyer with tracking information.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-vimba-lightblue flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-vimba-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-vimba-blue">3. Buyer Confirms Receipt</h3>
            <p className="text-gray-600">After receiving the product, the buyer confirms receipt and the funds are released to the seller.</p>
          </div>
        </div>

        {/* Verification Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-vimba-blue mb-4">Seller Verification</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We verify all sellers on our platform to ensure they're legitimate businesses or individuals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ID Verification */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="mr-4 mt-1">
                <UserCheck className="h-8 w-8 text-vimba-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-vimba-blue">ID Verification</h3>
                <p className="text-gray-600">Sellers provide government-issued ID to confirm their identity before they can receive payments.</p>
              </div>
            </div>

            {/* Liveness Check */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="mr-4 mt-1">
                <BadgeCheck className="h-8 w-8 text-vimba-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-vimba-blue">Liveness Check</h3>
                <p className="text-gray-600">Our verification process includes a liveness check to confirm the seller is a real person matching their ID.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
