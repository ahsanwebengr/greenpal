import {
  Header,
  MainLayout,
  ServiceProfileCard,
  Sidebar,
  YardWorkGallery,
  ReviewSection,
  ServiceStory,
  FaqSection,
  ServiceArea,
  MowingHistory,
  ExploreServices,
  Footer,
} from './components';

const App = () => {
  return (
    <main className='container'>
      <Header />
      <MainLayout>
        <div className='col-span-2'>
          <ServiceProfileCard />
          <YardWorkGallery />
          <ReviewSection />
          <ServiceStory />
          <FaqSection />
          <ServiceArea />
          <MowingHistory />
          <ExploreServices />
        </div>

        <div className='col-span-1 sticky top-0'>
          <Sidebar />
        </div>
      </MainLayout>
      <Footer />
    </main>
  );
};

export default App;
