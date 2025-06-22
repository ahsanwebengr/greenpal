import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const serviceOptions = [
  { id: 'mowing', label: 'Lawn mowing' },
  { id: 'bi-weekly', label: 'Bi-weekly lawn mowing' },
  { id: '10-day', label: 'Every 10 day lawn mowing' },
];

const ServiceSelectionCard = () => {
  const [selectedService, setSelectedService] = useState('mowing');

  return (
    <Card className='w-full gap-2  rounded-2xl  border'>
      <CardHeader>
        <CardTitle className='text-base font-bold text-gray-800 pr-5'>
          What kind of service do you need?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedService}
          onValueChange={setSelectedService}
          className='space-y-1.5'
        >
          {serviceOptions.map(option => (
            <div key={option.id} className='flex items-center space-x-3'>
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className='text-base text-gray-700 font-medium'>
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          size='lg'
          onClick={() => alert(`Price requested for: ${selectedService}`)}
          className='w-full mt-8 bg-gradient-to-b from-amber-400 to-orange-500 text-white font-bold text-lg rounded-full shadow-md hover:opacity-90 transition-opacity py-8'
        >
          Get My Free Price ›
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceSelectionCard;
