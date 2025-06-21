import { Image as ImageIcon, Star, Info, MapPin, Clock, Images } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tabItems = [
  { value: 'gallery', label: 'Gallery', icon: ImageIcon },
  { value: 'reviews', label: 'Reviews', icon: Star },
  { value: 'about', label: 'About', icon: Info },
  { value: 'service-area-1', label: 'Service Area', icon: MapPin },
  { value: 'service-area-2', label: 'Service Area', icon: Clock },
];

const galleryImages = [
  {
    src: 'https://t4.ftcdn.net/jpg/02/09/22/37/360_F_209223728_lHqPNKYNwaExR4Yr22fq3anYAYNt8fXk.jpg',
    alt: 'Castle with a large green lawn',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvxL7TvivuDuFnInA5z-3HHrnWRik-G_Zqw&s',
    alt: 'Modern white house with a striped lawn',
  },
  {
    src: 'https://media.istockphoto.com/id/479767332/photo/idyllic-home-with-covered-porch.jpg?s=612x612&w=0&k=20&c=noFe8bNIsnAoGNJXMepSVVrNGhEior2Y0wZcROB94Uw=',
    alt: 'Beige suburban house with a neat lawn',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS6FyVjMGGQx29A0ZljQ81jX41nVNOsQDNg&s',
    alt: 'Modern wooden houses in an autumn setting',
  },
  {
    src: 'https://simplelawnsolutions.com/cdn/shop/articles/cover_1_c81a6abb-7978-43c8-ba63-dcd7e175ba8a.jpg?v=1713454581',
    alt: 'Large brick house with a curved driveway',
  },
  {
    src: 'https://lirp.cdn-website.com/11d91288eb3f4cff935aa7ae0afc207b/dms3rep/multi/opt/ThinkstockPhotos-505408140-640w.jpg',
    alt: 'Two-story suburban house with a lawn',
  },
];

const YardWorkGallery = () => {
  return (
    <div className='w-full p-2 sm:p-6 bg-white font-sans'>
      <Tabs defaultValue='gallery' className='w-full'>
        <TabsList className='bg-transparent p-0 h-auto justify-start border-b border-gray-200 rounded-none w-full overflow-x-auto sm:overflow-visible'>
          {tabItems.map(item => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className='
                flex-shrink-0 px-4 py-3 text-sm sm:text-base 
                text-gray-600 font-semibold
                bg-transparent shadow-none rounded-none
                border-b-2 border-transparent 
                data-[state=active]:border-b-green-500 
                data-[state=active]:text-green-500
                focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-green-500
              '
            >
              <item.icon className='mr-2 h-5 w-5' />
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value='gallery' className='mt-6'>
          <h2 className='text-2xl md:text-3xl font-bold text-center sm:text-start text-gray-900 mb-6'>
            Completed Yard work by ETC Services
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 md:grid-rows-[224px_auto] gap-4'>
            <div className='col-span-1 row-span-1'>
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className='w-full h-full  object-cover rounded-2xl'
              />
            </div>
            <div className='col-span-1 row-span-1'>
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
            <div className='hidden md:block col-span-1 row-span-1'>
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
            <div className='col-span-2 md:col-span-2 md:row-span-1'>
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
            <div className='hidden md:flex flex-col gap-4'>
              <div className='flex-1 min-h-0'>
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className='w-full h-full object-cover rounded-2xl'
                />
              </div>
              <div className='flex-1 min-h-0 relative'>
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className='w-full h-full object-cover rounded-2xl'
                />
                <a
                  href='#'
                  className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center rounded-2xl text-white font-semibold cursor-pointer hover:bg-black/70 transition-all group'
                >
                  <Images className='h-7 w-7 mb-2 transform group-hover:scale-110 transition-transform' />
                  <span>See all 15 photos</span>
                </a>
              </div>
            </div>
            <div className='md:hidden col-span-2 relative'>
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className='w-full h-full object-cover rounded-2xl'
              />
              <a
                href='#'
                className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center rounded-2xl text-white font-semibold cursor-pointer'
              >
                <Images className='h-7 w-7 mb-2' />
                <span>See all 15 photos</span>
              </a>
            </div>
          </div>
        </TabsContent>

        <TabsContent value='reviews'>Reviews content goes here.</TabsContent>
        <TabsContent value='about'>About content goes here.</TabsContent>
        <TabsContent value='service-area-1'>
          service-area-1 content goes here.
        </TabsContent>
        <TabsContent value='service-area-2'>
          service-area-2 content goes here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default YardWorkGallery;
