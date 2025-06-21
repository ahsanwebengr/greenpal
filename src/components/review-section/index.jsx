import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Star, Search } from 'lucide-react';
import { ReviewCard } from '../review-card';

const reviewsData = [
  {
    id: 1,
    author: 'Family Cox',
    initials: 'FC',
    location: 'Nashville, TN 37220',
    serviceTag: "Near Lawn Cutting near Talbot's Corner",
    date: 'May 28, 25',
    rating: 5,
    verified: true,
    content:
      'They did great, I love Mercury Greens they always do such a detailed job. The lawn guy came when he said he would, he did a great job, and the price was very good. Whoever made this app...Well Done!',
  },
  {
    id: 2,
    author: 'Stacy Miller',
    avatarSrc: 'https://i.imgur.com/gfZk2zD.png',
    initials: 'SM',
    location: 'Brentwood, TN 37027',
    serviceTag: 'Full Service Lawn Care near Timberwood',
    date: 'May 28, 25',
    rating: 5,
    verified: true,
    content:
      "I contracted with someone and they were there in one day. I needed something done quick. I was happy. I've been using the service since April 2019 and have really enjoyed the service.",
  },
  {
    id: 3,
    author: 'John Doe',
    initials: 'JD',
    location: 'Franklin, TN 37064',
    serviceTag: 'Hedge Trimming',
    date: 'May 27, 25',
    rating: 4,
    verified: true,
    content:
      'The team was professional and efficient. My hedges have never looked better. A bit pricey, but the quality of work is worth it. Would recommend.',
  },
  {
    id: 4,
    author: 'Emily Stone',
    initials: 'ES',
    location: 'Spring Hill, TN 37174',
    serviceTag: 'Garden Maintenance',
    date: 'May 26, 25',
    rating: 5,
    verified: true,
    content:
      'Amazing work on my garden! The crew was punctual and made sure every plant was perfectly pruned and watered. Very happy with the attention to detail.',
  },
  {
    id: 5,
    author: 'Michael Brown',
    initials: 'MB',
    location: 'Murfreesboro, TN 37130',
    serviceTag: 'Weed Removal',
    date: 'May 25, 25',
    rating: 4,
    verified: true,
    content:
      'They got rid of all the weeds quickly. Could’ve cleaned up a bit better afterward, but overall I’m satisfied.',
  },
];

const filterKeywords = [
  { label: 'Lawn', count: 6 },
  { label: 'Landscaping', count: 2 },
  { label: 'Garden', count: 2 },
  { label: 'Removal', count: 2 },
  { label: 'Plant', count: 2 },
  { label: 'Yard', count: 1 },
  { label: 'Weeds', count: 1 },
];

const HeaderStarRating = ({ rating = 4, totalStars = 5 }) => (
  <div className='flex items-center'>
    {[...Array(totalStars)].map((_, index) => (
      <Star
        key={index}
        className={`h-6 w-6 ${
          index < rating
            ? 'text-orange-400 fill-orange-400'
            : 'text-gray-300 fill-gray-300'
        }`}
      />
    ))}
  </div>
);

export const ReviewSection = () => {
  return (
    <div className='w-full p-2 sm:p-6 bg-white font-sans'>
      <h1 className='text-3xl font-bold text-gray-900 text-center sm:text-start'>
        Reviews about ETC Services
      </h1>

      {/* Overall Rating Header */}
      <div className='flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-2 mt-4'>
        <span className='font-semibold text-gray-800 hidden sm:inline-block'>
          Overall rating 5/5
        </span>
        <div className='flex items-center gap-2'>
          <HeaderStarRating rating={4} />
          <a href='#' className='text-cyan-500 font-semibold hover:underline'>
            ( 4,940 reviews )
          </a>
        </div>
      </div>

      {/* Search and Filters */}
      <div className='mt-8'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
          <Input
            type='search'
            placeholder='Search reviews'
            className='pl-10 h-12 rounded-lg border-gray-300'
          />
        </div>
        <div className='mt-6'>
          <p className='text-sm text-gray-600 mb-3'>Read reviews that mention:</p>
          <div className='flex flex-wrap gap-2'>
            {filterKeywords.map(keyword => (
              <Button
                key={keyword.label}
                variant='outline'
                className='rounded-full text-cyan-600 border-gray-300 hover:bg-cyan-50'
              >
                {keyword.label} • {keyword.count}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-8 divide-y divide-gray-200'>
        {reviewsData.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Button variant='outline' size='lg' className=' border-black/80 hover:opacity-90'>
        Read More Reviews
      </Button>

      <hr className='mt-6 border-t-2 border-gray-200' />
    </div>
  );
};
export default ReviewSection;
