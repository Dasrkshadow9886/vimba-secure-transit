
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, RefreshCw, FileText, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransactionCard from '@/components/TransactionCard';
import VerificationStatus from '@/components/VerificationStatus';

// Mock data for transactions
const buyerTransactions = [
  {
    id: "tx1",
    title: "Gaming Laptop",
    amount: 1299.99,
    date: "2025-04-10",
    status: "shipping" as const,
    counterparty: "TechStore",
    isBuyer: true
  },
  {
    id: "tx2",
    title: "Wireless Headphones",
    amount: 199.99,
    date: "2025-04-05",
    status: "completed" as const,
    counterparty: "AudioGear",
    isBuyer: true
  },
  {
    id: "tx3",
    title: "Smartphone",
    amount: 899.99,
    date: "2025-04-01",
    status: "delivered" as const,
    counterparty: "MobileWorld",
    isBuyer: true
  }
];

const sellerTransactions = [
  {
    id: "tx4",
    title: "Vintage Watch",
    amount: 450.00,
    date: "2025-04-12",
    status: "pending" as const,
    counterparty: "JohnDoe",
    isBuyer: false
  },
  {
    id: "tx5",
    title: "Camera Lens",
    amount: 349.99,
    date: "2025-04-08",
    status: "in_progress" as const,
    counterparty: "PhotoEnthusiast",
    isBuyer: false
  },
  {
    id: "tx6",
    title: "Bluetooth Speaker",
    amount: 89.99,
    date: "2025-04-03",
    status: "completed" as const,
    counterparty: "MusicFan",
    isBuyer: false
  }
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-vimba-blue">Dashboard</h1>
            <p className="text-gray-600">Manage your transactions securely</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button className="bg-vimba-green hover:bg-vimba-green/90">
              <Plus className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="buying">Buying</TabsTrigger>
            <TabsTrigger value="selling">Selling</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Available Balance</CardTitle>
                  <CardDescription>Funds ready to withdraw</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-vimba-blue">$1,540.50</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Withdraw Funds</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Pending Transactions</CardTitle>
                  <CardDescription>Awaiting completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-vimba-blue">5</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setSelectedTab('buying')}>
                    View All
                  </Button>
                </CardFooter>
              </Card>
              
              <VerificationStatus status="pending" completedSteps={2} />
            </div>
            
            <h2 className="text-xl font-semibold text-vimba-blue mt-8">Recent Activity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...buyerTransactions, ...sellerTransactions]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 4)
                .map(transaction => (
                  <TransactionCard 
                    key={transaction.id} 
                    {...transaction} 
                  />
                ))}
            </div>
            
            <div className="text-center mt-4">
              <Button variant="link" className="text-vimba-green">
                View All Transactions
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          {/* Buying Tab */}
          <TabsContent value="buying" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-vimba-blue">Your Purchases</h2>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buyerTransactions.map(transaction => (
                <TransactionCard 
                  key={transaction.id} 
                  {...transaction} 
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Selling Tab */}
          <TabsContent value="selling" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-vimba-blue">Your Sales</h2>
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sellerTransactions.map(transaction => (
                <TransactionCard 
                  key={transaction.id} 
                  {...transaction} 
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Verification Tab */}
          <TabsContent value="verification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Seller Verification</CardTitle>
                <CardDescription>Complete these steps to receive payments as a seller</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Identity Verification */}
                <div className="border rounded-lg p-4 hover:border-vimba-green transition-colors">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 step-completed mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-vimba-blue">Identity Verification</h3>
                      <p className="text-sm text-gray-600">Upload a valid government-issued ID document</p>
                    </div>
                    <div className="text-green-500 font-medium text-sm">Completed</div>
                  </div>
                </div>
                
                {/* Step 2: Liveness Check */}
                <div className="border rounded-lg p-4 hover:border-vimba-green transition-colors">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 step-completed mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-vimba-blue">Liveness Check</h3>
                      <p className="text-sm text-gray-600">Verify it's really you with a quick selfie video</p>
                    </div>
                    <div className="text-green-500 font-medium text-sm">Completed</div>
                  </div>
                </div>
                
                {/* Step 3: Payment Information */}
                <div className="border rounded-lg p-4 hover:border-vimba-green transition-colors">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 step-active mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-vimba-blue">Payment Information</h3>
                      <p className="text-sm text-gray-600">Add your bank account to receive payments</p>
                    </div>
                    <Button size="sm" className="bg-vimba-green hover:bg-vimba-green/90">
                      Complete
                    </Button>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    Your verification is in progress. Our team is reviewing your documents and will update your status within 1-2 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
