import { ReactSVG } from 'react-svg';
import { brand_logo } from '@/assets/icons';
import { banner_bg } from '@/assets/images';

const Header = () => {
  return (
    <header>
      <nav className='bg-info flex items-center p-3 sm:p-7'>
        <ReactSVG
          src={brand_logo}
          beforeInjection={svg => {
            svg.setAttribute('class', 'w-24 sm:w-48');
          }}
          className='inline-block'
        />
      </nav>
      <img
        src={banner_bg}
        alt='banner image'
        className='w-full h-full max-h-30 sm:max-h-42 object-cover'
        loading='lazy'
      />
    </header>
  );
};

export default Header;
