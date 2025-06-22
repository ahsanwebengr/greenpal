import { MapPin, DollarSign, Clock, CalendarDays } from 'lucide-react';
import InfoRow from './info-row';

const JobCard = ({ job }) => {
  return (
    <div className='rounded-xl  overflow-hidden flex flex-col'>
      <div className='relative'>
        <img
          className='w-full h-56 object-cover rounded-xl'
          src={job.imageUrl}
          alt={job.title}
        />
        {/* Price Ribbon */}
        <div className='absolute top-0 right-4 w-16 text-center'>
          <div className='bg-orange-500 text-white font-bold text-lg py-1'>
            ${job.price}
          </div>
          <div
            className='w-0 h-0 
                border-l-[32px] border-l-orange-500
                border-r-[32px] border-r-orange-500
                border-b-[12px] border-b-transparent
                transform -translate-y-px'
          ></div>
        </div>
      </div>

      <div className='py-2 bg-transparent flex-grow flex flex-col'>
        <h3 className='text-base sm:text-lg font-bold text-gray-800 mb-1'>
          {job.title?.split('–')[0]}
          <span className='ml-1 font-normal text-gray-600'>
            – {job.title?.split('–')[1]}
          </span>
        </h3>
        <div className='mt-2 flex items-center gap-2 text-gray-500'>
          <MapPin className='h-4 w-4' />
          <span className='text-xs'>{job.location}</span>
        </div>

        <div className='mt-4 space-y-3'>
          <InfoRow
            icon={<DollarSign size={20} />}
            label='Price'
            value={`$${job.price} per cut`}
          />
          <InfoRow icon={<Clock size={20} />} label='Last Mowed' value={job.lastMowed} />
          <InfoRow
            icon={<CalendarDays size={20} />}
            label='Service Frequency'
            value={job.frequency}
          />
        </div>

        <div className='mt-6 bg-slate-100 p-4 rounded-tl-none rounded-xl flex-grow'>
          <p className='text-gray-600 text-sm'>{job.note}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
