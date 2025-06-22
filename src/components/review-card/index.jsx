import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, BadgeCheck } from 'lucide-react';
import { StarRating } from '@/components';

export const ReviewCard = ({ review }) => {
  return (
    <div className='py-2 sm:py-4 transition-shadow duration-200 border-b border-gray-200 last:border-b-0'>
      <div className='flex flex-col'>
        {/* Top section: Avatar + Info */}
        <div className='flex flex-row items-start gap-4 mb-2 sm:mb-4'>
          {/* Avatar */}
          <Avatar className='w-12 h-12 shrink-0'>
            <AvatarImage src={review.avatarSrc} alt={`${review.author}'s avatar`} />
            <AvatarFallback className='bg-cyan-100 text-cyan-600 font-bold'>
              {review.initials}
            </AvatarFallback>
          </Avatar>

          {/* Details */}
          <div className='flex flex-col w-full'>
            {/* Mobile: Name + date on top */}
            <div className='flex justify-between sm:hidden mb-1'>
              <h3 className='text-base font-semibold text-gray-900'>{review.author}</h3>
              <span className='text-sm text-gray-500'>{review.date}</span>
            </div>

            {/* Mobile: Location */}
            <div className='sm:hidden flex items-center text-sm text-gray-500 mb-1'>
              <MapPin className='w-4 h-4 mr-1' />
              <span>{review.location}</span>
            </div>

            {/* Mobile: Service Tag */}
            <span className='sm:hidden text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded w-max mb-2'>
              {review.serviceTag}
            </span>

            {/* Desktop layout */}
            <div className='hidden sm:flex justify-between mb-1'>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                  <h3 className='text-lg font-semibold text-gray-900'>{review.author}</h3>
                  <div className='flex items-center text-sm text-gray-500'>
                    <MapPin className='w-4 h-4 mr-1' />
                    <span>{review.location}</span>
                  </div>
                  <span className='text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded'>
                    {review.serviceTag}
                  </span>
                </div>
              </div>
              <span className='text-sm text-gray-500 flex-shrink-0'>{review.date}</span>
            </div>

            {/* Rating + Verified */}
            <div className='flex items-center gap-2 mb-2 sm:mb-1'>
              <StarRating
                size='size-4'
                rating={review.rating}
                filledColor='text-yellow-400 fill-yellow-400'
              />
              {review.verified && (
                <div className='flex items-center gap-1 text-xs  sm:text-sm text-green-600 font-medium'>
                  <BadgeCheck size={16} />
                  Verified by GreenPal
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Review content */}
        <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
          {review.content}
        </p>
      </div>
    </div>
  );
};
