import { ChevronLeft, ChevronRight } from 'lucide-react';
const SticPagination = () => {
  return (
    <>
      <div className='flex justify-center sm:justify-end items-center gap-3 mt-5'>
        <div
          className='flex size-10.5 cursor-default items-center justify-center rounded-full border border-gray-300'
          aria-hidden='true'
        >
          <ChevronLeft size={28} className='text-gray-300 cursor-not-allowed' />
        </div>

        <p className='text-lg font-medium text-gray-700 tabular-nums'>1 of 3,042</p>

        <div
          className='flex size-10.5 cursor-pointer items-center justify-center rounded-full border border-gray-400'
          aria-hidden='true'
        >
          <ChevronRight size={28} className='text-gray-600 cursor-pointer' />
        </div>
      </div>
    </>
  );
};

export default SticPagination;
