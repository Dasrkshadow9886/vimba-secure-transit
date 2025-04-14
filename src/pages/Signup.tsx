
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeIcon, EyeOffIcon, UserIcon, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center">
              <Shield className="h-10 w-10 text-vimba-green" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-vimba-blue">Join Vimba Agency</h1>
            <p className="text-gray-600 mt-2">Create an account to start secure transactions</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Sign up as a buyer or seller to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buyer" className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buyer">I'm a Buyer</TabsTrigger>
                  <TabsTrigger value="seller">I'm a Seller</TabsTrigger>
                </TabsList>
                <TabsContent value="buyer">
                  <p className="text-sm text-gray-600 mb-4">
                    As a buyer, you can safely pay for items and only release funds when you're satisfied.
                  </p>
                </TabsContent>
                <TabsContent value="seller">
                  <p className="text-sm text-gray-600 mb-4">
                    As a seller, you'll need to complete verification but can receive secure payments for your products.
                  </p>
                </TabsContent>
              </Tabs>
            
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input id="email" type="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a secure password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Password must be at least 8 characters with at least one number and one special character.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 rounded border-gray-300 text-vimba-green focus:ring-vimba-green"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link to="/terms" className="text-vimba-green hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-vimba-green hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-vimba-green hover:bg-vimba-green/90">
                  Create Account
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600 text-center w-full">
                Already have an account?{" "}
                <Link to="/login" className="text-vimba-green font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;
