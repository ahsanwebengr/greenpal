import ContactOptionsCard from './contact-option-card';
import ServiceSelectionCard from './service-selection';

const Sidebar = () => {
  return (
    <main className='flex items-center justify-center p-2 sm:p-4 '>
      <div className='flex flex-col gap-4 w-full sm:max-w-[320px]'>
        <ServiceSelectionCard />
        <ContactOptionsCard />
      </div>
    </main>
  );
};

export default Sidebar;
