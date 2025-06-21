import { Shrub, MapPin, BoomBox, Drill } from 'lucide-react';

const ServiceBadge = ({ icon, text }) => (
  <div className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm'>
    {icon}
    <span className='font-medium text-gray-700'>{text}</span>
  </div>
);

const ServiceArea = () => {
  const services = [
    { name: 'Landscaping', icon: <Shrub className='h-5 w-5 text-gray-600' /> },
    { name: 'Lawn Mowing', icon: <Drill className='h-5 w-5 text-gray-600' /> },
    { name: 'Yard Clean Up', icon: <BoomBox className='h-5 w-5 text-gray-600' /> },
  ];

  const locations = [
    'Lawn Care Goodlettsville',
    'Lawn Care Mount Juliet',
    'Lawn Care Madison',
    'Lawn Care Lebanon',
    'Lawn Care Brentwood',
    'Lawn Care Gallatin',
    'Lawn Care Franklin',
    'Lawn Care Portland',
    'Lawn Care Springfield',
    'Lawn Care La Vergne',
    'Lawn Care Antioch',
  ];

  return (
    <div className='w-full font-sans bg-white'>
      <div className='p-4 md:p-6'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-start'>
          Lawn & Yard Services Offered:
        </h2>
        <div className='mt-6 flex flex-wrap gap-4'>
          {services.map(service => (
            <ServiceBadge key={service.name} icon={service.icon} text={service.name} />
          ))}
        </div>
      </div>

      <div className='bg-[#D8F3D7] px-4 sm:px-6 lg:px-8 pb-16 pt-8'>
        <div className='text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 max-w-3xl mx-auto leading-tight'>
            ETC services coverage area and lawn maintenance clients in the White House
            area
          </h2>
          <div className='mt-8'>
            <iframe
              title='Service Area Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.049254995329!2d-86.65194068474744!3d36.47005398000813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863e7a3b7e6d7b9%3A0x7e4e8e1e8b4a3e8b!2sWhite%20House%2C%20TN!5e0!3m2!1sen!2sus!4v1717690000000!5m2!1sen!2sus'
              width='100%'
              height='400'
              style={{
                border: 0,
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full rounded-lg shadow-lg border border-gray-200'
            ></iframe>
          </div>
          <p className='mt-4 text-start text-sm text-gray-600'>
            313 Walnut Court White House, TN 37188
          </p>
        </div>
        <div className='mt-2 '>
          <h3 className='text-2xl font-bold text-gray-800'>
            Lawn & Yard Services Offered in These Locations:
          </h3>
          <div className='mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4  text-left'>
            {locations.map(location => (
              <div key={location} className='flex items-center justify-start'>
                <MapPin className='h-5 w-5 text-gray-700 flex-shrink-0' />
                <span className='ml-3 text-lg font-medium text-gray-700'>{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
