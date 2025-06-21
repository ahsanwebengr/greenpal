import { MapPin, MessageCircle, Phone, DollarSign, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/star-rating';

const ServiceProfileCard = () => {
  return (
    <div className='bg-white font-sans p-2 sm:p-8 rounded-xl'>
      {/* --- BREADCRUMBS --- */}
      <nav aria-label='Breadcrumb' className='mb-6 flex items-center '>
        <a
          href='#'
          className='text-sky-600 hover:underline text-[9px] sm:text-sm whitespace-nowrap'
        >
          Lawn Care Services
        </a>
        <ChevronRight size={16} className='mt-0 sm:mt-1 text-neutral-500' />
        <span className='mx-2 text-sky-600'></span>
        <a
          href='#'
          className='text-sky-600 hover:underline text-[9px] sm:text-sm whitespace-nowrap'
        >
          Lawn-Care-Goodlettsville-TN
        </a>
        <ChevronRight size={16} className='mt-0 sm:mt-1 text-neutral-500' />
        <span className='mx-2 text-sky-600'></span>
        <span className='text-gray-700  text-[9px] sm:text-sm whitespace-nowrap'>
          Etc Services
        </span>
      </nav>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-8'>
        <Avatar className='w-36 h-36 border-2 border-white shadow-md'>
          <AvatarImage
            src={
              'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            className='object-center'
            alt='Profile picture of a service provider from Etc Services'
          />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>

        <div className='flex-grow flex flex-col items-center md:items-start w-full'>
          <p className='text-lg text-gray-600'>Get lawn care in White House by</p>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 my-1 text-center md:text-left'>
            Etc Services
          </h1>

          <div className='flex items-center justify-center text-center text-gray-700 mt-2'>
            <MapPin className='h-4 w-4 mr-2 ' aria-hidden='true' />
            <span className='max-w-[260px] truncate'>
              313 Walnut Court White House, TN, 37188
            </span>
          </div>

          {/* Rating Section */}
          <div className='flex flex-col sm:flex-row items-center gap-x-3 gap-y-2 mt-4'>
            <span className='font-medium text-gray-800'>Overall rating 5/5</span>
            <div className='flex items-center gap-2'>
              <StarRating rating={4} />
              <a href='#' className='text-sky-600 font-semibold hover:underline'>
                ( 4,940 reviews )
              </a>
            </div>
          </div>

          <p className='text-sm text-gray-600 mt-4 text-center md:text-left'>
            Your trust means everything to us.{' '}
            <a href='#' className='text-sky-600 underline hover:no-underline'>
              Learn about our review guidlines.
            </a>
          </p>

          {/* Action Buttons */}
          <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-6'>
            <Button variant='outline' size='lg' className='text-gray-800'>
              <MessageCircle className='h-4 w-4 mr-2' aria-hidden='true' />
              Message
            </Button>
            <Button variant='outline' size='lg' className='text-gray-800'>
              <Phone className='h-4 w-4 mr-2' aria-hidden='true' />
              Request a Call
            </Button>
            <Button variant='outline' size='lg' className='text-gray-800'>
              <DollarSign className='h-4 w-4 mr-2' aria-hidden='true' />
              Make a Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfileCard;
