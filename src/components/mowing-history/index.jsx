import JobCard from './job-card';
import SticPagination from './static-pagination';

const jobsData = [
  {
    id: 1,
    imageUrl:
      'https://www.robertlandscapes.com/wp-content/uploads/2023/11/Blog-image-Multi-Level-Garden-Design.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: 'Near Routine Yard Maintenance near Robertson',
    lastMowed: '2 months ago',
    frequency: 'Weekly',
    note: 'I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.',
  },
  {
    id: 2,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1480307235-credit-mkovalevskaya-getty-6670a9e82c722.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: "Near Lawn Cutting near Talbot's Corner",
    lastMowed: '2 months ago',
    frequency: 'Every 10 days',
    note: 'Our backyard is all garden/pea gravel so only the front yard needs to be mowed, but we do want it to be edged, blown off, etc.',
  },
  {
    id: 3,
    imageUrl:
      'https://www.robertlandscapes.com/wp-content/uploads/2023/11/Blog-image-Multi-Level-Garden-Design.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: 'Near Routine Yard Maintenance near Robertson',
    lastMowed: '2 months ago',
    frequency: 'Weekly',
    note: 'I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.',
  },
  {
    id: 4,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1480307235-credit-mkovalevskaya-getty-6670a9e82c722.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: "Near Lawn Cutting near Talbot's Corner",
    lastMowed: '2 months ago',
    frequency: 'Every 10 days',
    note: 'Our backyard is all garden/pea gravel so only the front yard needs to be mowed, but we do want it to be edged, blown off, etc.',
  },
  {
    id: 5,
    imageUrl:
      'https://www.robertlandscapes.com/wp-content/uploads/2023/11/Blog-image-Multi-Level-Garden-Design.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: 'Near Routine Yard Maintenance near Robertson',
    lastMowed: '2 months ago',
    frequency: 'Weekly',
    note: 'I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.',
  },
  {
    id: 6,
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1480307235-credit-mkovalevskaya-getty-6670a9e82c722.jpg',
    price: 75,
    title: 'Yard Cutting – Kansas City, Missouri',
    location: "Near Lawn Cutting near Talbot's Corner",
    lastMowed: '2 months ago',
    frequency: 'Every 10 days',
    note: 'Our backyard is all garden/pea gravel so only the front yard needs to be mowed, but we do want it to be edged, blown off, etc.',
  },
];

const MowingHistory = () => {
  return (
    <section className='pt-8 pb-6 px-2 sm:px-6 lg:px-8'>
      <div className='text-left mb-8'>
        <h2 className='text-2xl text-center sm:text-start sm:text-3xl font-bold text-gray-800 tracking-tight'>
          Mowing History
        </h2>
        <p className='mt-2 text-lg text-gray-500 text-center sm:text-start'>
          Recent work history of completed mowings by Etc Services
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {jobsData.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <SticPagination />
    </section>
  );
};

export default MowingHistory;
