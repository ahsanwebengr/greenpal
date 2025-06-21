const MainLayout = ({ children }) => {
  return (
    <article className='relative -top-12 flex justify-center w-full px-2.5'>
      <div className='w-full max-w-7xl bg-background p-2 sm:p-4 grid grid-cols-1 lg:grid-cols-3'>
        {children}
      </div>
    </article>
  );
};

export default MainLayout;
