
import React from 'react';
import { Calendar, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TransactionStatus = "pending" | "in_progress" | "shipping" | "delivered" | "completed" | "disputed";

interface TransactionCardProps {
  id: string;
  title: string;
  amount: number;
  date: string;
  status: TransactionStatus;
  counterparty: string;
  isBuyer: boolean;
}

const StatusBadge = ({ status }: { status: TransactionStatus }) => {
  switch (status) {
    case "pending":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>;
    case "in_progress":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>;
    case "shipping":
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Shipping</Badge>;
    case "delivered":
      return <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Delivered</Badge>;
    case "completed":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>;
    case "disputed":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Disputed</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  title,
  amount,
  date,
  status,
  counterparty,
  isBuyer
}) => {
  const getActionButton = () => {
    if (isBuyer) {
      switch (status) {
        case "delivered":
          return (
            <Button className="bg-vimba-green hover:bg-vimba-green/90">
              Confirm Receipt
            </Button>
          );
        case "shipping":
          return (
            <Button variant="outline">
              Track Shipment
            </Button>
          );
        case "completed":
          return null;
        default:
          return (
            <Button variant="outline">
              View Details
            </Button>
          );
      }
    } else {
      // Seller actions
      switch (status) {
        case "pending":
          return (
            <Button className="bg-vimba-green hover:bg-vimba-green/90">
              Accept Order
            </Button>
          );
        case "in_progress":
          return (
            <Button className="bg-vimba-green hover:bg-vimba-green/90">
              Ship Now
            </Button>
          );
        case "completed":
          return null;
        default:
          return (
            <Button variant="outline">
              View Details
            </Button>
          );
      }
    }
  };
  
  const getStatusIcon = () => {
    switch(status) {
      case "pending": 
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "in_progress": 
        return <Package className="h-5 w-5 text-blue-500" />;
      case "shipping": 
        return <Package className="h-5 w-5 text-purple-500" />;
      case "delivered": 
        return <Package className="h-5 w-5 text-teal-500" />;
      case "completed": 
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "disputed": 
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: 
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold truncate pr-4">{title}</CardTitle>
          <StatusBadge status={status} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <div className="text-sm font-medium">Amount:</div>
            <div className="font-semibold text-vimba-blue">${amount.toFixed(2)}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Date:</div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm font-medium">{isBuyer ? "Seller" : "Buyer"}:</div>
            <div className="text-sm">{counterparty}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <div className="flex items-center">
          {getStatusIcon()}
          <span className="ml-2 text-sm text-gray-600">{status.replace("_", " ")}</span>
        </div>
        {getActionButton()}
      </CardFooter>
    </Card>
  );
};

export default TransactionCard;
