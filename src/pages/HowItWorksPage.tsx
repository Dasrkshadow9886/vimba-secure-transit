
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, PackageCheck, CreditCard, AlertTriangle, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-vimba-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="inline-block h-16 w-16 text-vimba-green mb-4" />
          <h1 className="text-4xl font-bold mb-4">How Vimba Agency Works</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">Our secure escrow service protects both buyers and sellers in online transactions.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#for-buyers">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                For Buyers
              </Button>
            </a>
            <a href="#for-sellers">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                For Sellers
              </Button>
            </a>
            <a href="#verification">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Verification Process
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <HowItWorks />
      
      {/* Detailed Process */}
      <section className="py-16 bg-white" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vimba-blue mb-4">The Vimba Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Understand exactly how our escrow service ensures safe transactions.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="buyers">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="buyers" id="for-buyers">For Buyers</TabsTrigger>
                <TabsTrigger value="sellers" id="for-sellers">For Sellers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buyers" className="mt-6 space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <CreditCard className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">1. Create a Transaction</h3>
                    <p className="text-gray-600 mb-4">Sign up for a Vimba account and create a new transaction. Enter details about the item you're purchasing, the price, and the seller's information.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">This creates a secure transaction record that both parties can access, establishing clear expectations.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <Shield className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">2. Deposit Funds</h3>
                    <p className="text-gray-600 mb-4">Deposit the agreed amount into our secure escrow service using any of our supported payment methods. The seller will be notified that funds have been secured.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">Your money is held securely by Vimba, not released to the seller yet. This proves you're a serious buyer while protecting your funds.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <PackageCheck className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">3. Receive and Verify</h3>
                    <p className="text-gray-600 mb-4">The seller ships the item to you. Once received, you have a set inspection period (typically 3 days) to verify the item matches the description and is in the expected condition.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">You have time to carefully inspect the item before the seller receives payment, ensuring you get exactly what you paid for.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <ShieldCheck className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">4. Confirm Receipt</h3>
                    <p className="text-gray-600 mb-4">Once satisfied with the item, confirm receipt in your Vimba dashboard. This releases the funds to the seller, completing the transaction.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">The seller only gets paid when you're fully satisfied with your purchase, giving you complete control over the release of funds.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sellers" className="mt-6 space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <Shield className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue" id="verification">1. Complete Verification</h3>
                    <p className="text-gray-600 mb-4">Create your Vimba account and complete our seller verification process, including ID verification and liveness check to confirm your identity.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">This proves you're a legitimate seller, building trust with buyers who know you've been verified by Vimba.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <CreditCard className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">2. Accept Transaction</h3>
                    <p className="text-gray-600 mb-4">Receive a notification when a buyer creates a transaction. Review the details and accept the transaction terms. You'll be notified when the buyer deposits funds.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">You only prepare and ship items after the buyer has deposited funds into escrow, ensuring you're dealing with a serious buyer.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <PackageCheck className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">3. Ship the Item</h3>
                    <p className="text-gray-600 mb-4">Once funds are secured in escrow, ship the item to the buyer using a tracked shipping method. Upload the tracking information to the Vimba transaction.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">Tracking information gives both you and the buyer visibility into the shipping process and provides evidence of delivery.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-vimba-lightblue flex items-center justify-center">
                      <ShieldCheck className="h-10 w-10 text-vimba-blue" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2 text-vimba-blue">4. Receive Payment</h3>
                    <p className="text-gray-600 mb-4">Once the buyer confirms receipt and satisfaction with the item, the funds are released from escrow to your account. You can withdraw these funds to your bank account.</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm font-medium text-vimba-blue">Why this helps:</p>
                      <p className="text-sm text-gray-600">You're guaranteed payment once the buyer is satisfied, with no risk of chargebacks or payment disputes after the transaction is complete.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Dispute Resolution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="h-12 w-12 text-amber-600" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3 text-vimba-blue">Dispute Resolution</h3>
                <p className="text-gray-600 mb-4">
                  In the rare event of a dispute between buyer and seller, Vimba offers a fair resolution process. 
                  Our team will review evidence from both parties, inspect transaction records, and make a fair decision 
                  based on our policies. We aim to resolve all disputes within 7 business days.
                </p>
                <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-100">
                  <p className="font-medium text-vimba-blue mb-2">Common dispute reasons:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Item significantly different from description</li>
                    <li>Item damaged during shipping</li>
                    <li>Item never received despite tracking showing delivery</li>
                    <li>Counterfeit or unauthorized replica items</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 vimba-gradient text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Trade Securely?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of buyers and sellers who trust Vimba Agency for secure online transactions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-vimba-blue hover:bg-gray-100 text-lg px-8 py-5">
                Create Account
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-5">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
