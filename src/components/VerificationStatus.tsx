
import React from 'react';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface VerificationStatusProps {
  status: 'unverified' | 'pending' | 'verified';
  completedSteps: number;
}

const VerificationStatus: React.FC<VerificationStatusProps> = ({ status, completedSteps }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'pending':
        return <Circle className="h-6 w-6 text-amber-500" />;
      case 'unverified':
      default:
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'verified':
        return 'Your account is fully verified! You can now receive payments.';
      case 'pending':
        return 'Your verification is being reviewed. This usually takes 1-2 business days.';
      case 'unverified':
      default:
        return 'Your account is not verified. Complete verification to receive payments.';
    }
  };

  const getActionButton = () => {
    switch (status) {
      case 'verified':
        return null;
      case 'pending':
        return <Button variant="outline" disabled>Review in Progress</Button>;
      case 'unverified':
      default:
        return <Button className="bg-vimba-green hover:bg-vimba-green/90">Complete Verification</Button>;
    }
  };

  const progressPercentage = (completedSteps / 3) * 100;

  return (
    <Card className="shadow-sm border-l-4 border-l-vimba-green">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg text-vimba-blue">Seller Verification</CardTitle>
            <CardDescription>ID verification & liveness check</CardDescription>
          </div>
          {getStatusIcon()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{completedSteps} of 3 steps</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        <p className="text-sm text-gray-600 mb-4">{getStatusMessage()}</p>
        {getActionButton()}
      </CardContent>
    </Card>
  );
};

export default VerificationStatus;
