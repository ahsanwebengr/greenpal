import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { StarRating } from '@/components';

export const ReviewCard = ({ review }) => {
  return (
    <div className='flex items-start space-x-4 py-8'>
      <Avatar className='w-12 h-12'>
        <AvatarImage src={review.avatarSrc} alt={`${review.author}'s avatar`} />
        <AvatarFallback className='bg-cyan-100 text-cyan-600 font-bold'>
          {review.initials}
        </AvatarFallback>
      </Avatar>

      <div className='flex-1'>
        {/* Review Header */}
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <div className='flex flex-col'>
            <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
              <span className='font-bold text-lg text-gray-900'>{review.author}</span>
              <span className='flex items-center text-sm text-gray-500'>
                <MapPin className='h-4 w-4 mr-1' /> {review.location}
              </span>
              <Badge variant='secondary' className='font-normal'>
                {review.serviceTag}
              </Badge>
            </div>
          </div>
          <span className='text-sm text-gray-500 mt-1 sm:mt-0'>{review.date}</span>
        </div>

        <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-2'>
          <StarRating rating={review.rating} />
          {review.verified && (
            <div className='flex items-center text-sm text-green-600 font-semibold'>
              <CheckCircle2 className='h-4 w-4 mr-1 fill-green-600 text-white' />
              Verified by GreenPal
            </div>
          )}
        </div>

        <p className='mt-3 text-gray-700 leading-relaxed'>{review.content}</p>
      </div>
    </div>
  );
};
