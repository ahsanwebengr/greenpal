import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareText, Phone, DollarSign, ChevronRight } from 'lucide-react';

const contactActions = [
  {
    icon: MessageSquareText,
    label: 'Message',
    href: '#message',
    isFilled: true,
  },
  {
    icon: Phone,
    label: 'Request a Call',
    href: '#call',
    isFilled: true,
  },
  {
    icon: DollarSign,
    label: 'Make a Payment',
    href: '#payment',
    isFilled: false,
  },
];

const ContactOptionsCard = () => {
  return (
    <Card className='w-full pb-0 pt-2 gap-0 rounded-2xl border overflow-hidden'>
      <CardHeader>
        <CardTitle className='text-base font-bold text-gray-800 py-2'>
          Call or Text for Estimates
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='divide-y divide-gray-200'>
          {contactActions.map(action => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                className='flex items-center justify-between w-full px-6 py-4 text-cyan-500 hover:bg-gray-50 transition-colors'
              >
                <div className='flex items-center gap-3'>
                  <Icon
                    className={`h-6 w-6 ${action.isFilled ? 'fill-current' : ''}`}
                    strokeWidth={2.5}
                  />
                  <span className='font-semibold text-base'>{action.label}</span>
                </div>
                <ChevronRight className='h-5 w-5' />
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactOptionsCard;
