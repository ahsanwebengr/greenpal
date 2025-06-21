import { Star } from 'lucide-react';

const StarRating = ({
  rating,
  totalStars = 5,
  size = 'size-6',
  className = '',
  filledColor = 'text-orange-400 fill-orange-400',
  unfilledColor = 'text-gray-300 fill-gray-300',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`${size} ${index < rating ? filledColor : unfilledColor}`}
          aria-hidden='true'
        />
      ))}
    </div>
  );
};

export default StarRating;
