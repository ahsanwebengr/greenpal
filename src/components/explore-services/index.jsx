import { Building2, Landmark, TowerControl, Warehouse } from 'lucide-react';
import Chip from '../chip';

const ExploreServices = () => {
  const professionals = [
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Green Haven Lawncare',
    },
    {
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      text: 'Volunteer Lawn Care',
    },
    {
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'Tru Choice Lawn',
    },
    { initials: 'SL', text: 'Sb Lawn Care', bgColor: 'bg-orange-400' },
    { initials: 'FL', text: 'Fox Landscape', bgColor: 'bg-purple-400' },
    {
      image: 'https://randomuser.me/api/portraits/men/34.jpg',
      text: 'Volunteer Lawn Care',
    },
  ];

  const landscapingServices = [
    { text: 'Landscaping in Seattle', icon: <Building2 size={20} /> },
    { text: 'Landscaping in Portland, Oregon', icon: <Landmark size={20} /> },
    { text: 'Landscaping in San Francisco', icon: <TowerControl size={20} /> },
    { text: 'Landscaping in Phoenix, Arizona', icon: <Warehouse size={20} /> },
  ];

  const lawnCareServices = [
    { text: 'Lawn Care in Seattle', icon: <Building2 size={20} /> },
    { text: 'Lawn Care in Portland, Oregon', icon: <Landmark size={20} /> },
    { text: 'Lawn Care in San Francisco', icon: <TowerControl size={20} /> },
    { text: 'Lawn Care in Phoenix, Arizona', icon: <Warehouse size={20} /> },
  ];

  return (
    <section className='bg-white font-sans py-1'>
      <div className='px-2'>
        <div>
          <h2 className='text-2xl sm:text-[26px] font-bold text-gray-900 text-center sm:text-start'>
            Explore More Lawn Care Professionals Near the White House
          </h2>
          <div className='mt-6 flex flex-wrap items-center gap-3'>
            {professionals.map((prof, index) => (
              <Chip
                key={index}
                type='professional'
                image={prof.image}
                initials={prof.initials}
                text={prof.text}
                bgColor={prof.bgColor}
              />
            ))}
            <Chip type='action' text='Show More Lawn Care Companies in Tennessee' />
          </div>
        </div>

        <div className='mt-6 rounded bg-slate-100/70 p-2'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-start'>
            Find Landscaping & Lawn Care Services Near You
          </h2>

          <div className='mt-2 sm:mt-8'>
            <h3 className='text-lg font-semibold text-gray-800 text-center sm:text-start'>
              Landscaping Services
            </h3>
            <div className='mt-2 sm:mt-4 flex flex-col md:flex-row md:flex-wrap md:items-center gap-1 sm:gap-3'>
              {landscapingServices.map((service, index) => (
                <Chip
                  key={index}
                  type='service'
                  icon={service.icon}
                  text={service.text}
                />
              ))}
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-semibold text-gray-800 text-center sm:text-start'>
              Lawn Care Services
            </h3>
            <div className='mt-2 sm:mt-4 flex flex-col md:flex-row md:flex-wrap md:items-center gap-1 sm:gap-3'>
              {lawnCareServices.map((service, index) => (
                <Chip
                  key={index}
                  type='service'
                  icon={service.icon}
                  text={service.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;
