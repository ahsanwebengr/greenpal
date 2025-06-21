import { useState } from 'react';
import { Button } from '@/components/ui/button';

const serviceAreas = [
  'Chattanooga (Hamilton County)',
  'Knoxville (Knox County)',
  'Murfreesboro (Rutherford County)',
  'Clarksville (Montgomery County)',
  'Kingsport (Sullivan County)',
  'Cleveland (Bradley County)',
];

export const ServiceStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-white font-sans mt-1 mb-6'>
      <div className='p-2 md:p-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center sm:text-start'>
          ETC Services Story
        </h2>

        <div
          className='
            relative mt-6 overflow-hidden 
            transition-[max-height] duration-700 ease-in-out
          '
          style={{ maxHeight: isExpanded ? '1000px' : '260px' }}
        >
          <div className='space-y-5 text-gray-800 leading-relaxed'>
            <h3 className='text-xl font-bold text-gray-900 text-center sm:text-start'>
              Transform Your Outdoor Spaces with Etc Services in White House, Robertson
              County, TN!
            </h3>
            <p>
              Etc Services, prominently located in the White House, Robertson County,
              embodies Erik Carvotta's vision and expertise. The business is renowned for
              its unparalleled lawn care services in Hendersonville, Davidson, Sumner, and
              parts of Robertson counties.
            </p>
            <h3 className='text-xl font-bold text-gray-900'>
              Discover Lawn Experts Near You on GreenPal
            </h3>
            <p>
              Beyond the areas mentioned, GreenPal's expansive network extends to major
              neighborhoods such as
            </p>
            <ul className='list-disc pl-6 space-y-1 text-gray-700'>
              {serviceAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p>
              Residents in these cities can effortlessly discover and collaborate with top
              lawn care specialists, ensuring their outdoor spaces receive the
              professional attention they deserve.
            </p>
          </div>

          {!isExpanded && (
            <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent' />
          )}
        </div>

        <div className='mt-8'>
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant='outline'
            size='lg'
            className='border-black/80 hover:opacity-90'
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        </div>
      </div>
    </div>
  );
};
