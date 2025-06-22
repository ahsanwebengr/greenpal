import { Facebook, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { Pinterest } from '@/assets/icons';
import { footer_illsu } from '@/assets/images';

const companyLinks = [
  { name: 'How It Works', href: '#' },
  { name: 'Apply as a Vendor', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Use', href: '#' },
];

const serviceAreaLinks = [
  { name: 'Lawn Mowing in Beverly Hills CA', href: '#' },
  { name: 'Lawn Care Service in Brandon MS', href: '#' },
  { name: 'Lawn Cut in Lancaster OH', href: '#' },
  { name: 'Lawn Cut in Stuart FL', href: '#' },
  { name: 'Lawn Maintenance in Bridgeport CT', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: <Facebook size={18} /> },
  { name: 'X', href: '#', icon: <Twitter size={18} /> },
  { name: 'Pinterest', href: '#', icon: <Pinterest size={18} /> },
  { name: 'Instagram', href: '#', icon: <Instagram size={18} /> },
];

const Footer = () => {
  return (
    <footer className='bg-green-600 font-sans'>
      {/* Main Footer Content */}
      <div className='px-6 py-8 sm:py-16 sm:px-8 lg:px-12'>
        <div className='grid grid-cols-1 gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-12 lg:gap-8 items-start'>
          {/* Company Links */}
          <div className='lg:col-span-3'>
            <h3 className='text-base sm:text-lg font-bold text-white'>Company</h3>
            <ul className='mt-6 space-y-4'>
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-green-100 hover:text-white hover:underline'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Service Areas */}
          <div className='lg:col-span-3'>
            <h3 className='text-base sm:text-lg font-bold text-white'>
              Featured Service Areas:
            </h3>
            <ul className='mt-6 space-y-4'>
              {serviceAreaLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-green-100 hover:text-white hover:underline'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href='#'
                  className='inline-flex items-center gap-1 font-semibold text-white hover:underline'
                >
                  Show +40 Service Areas <ChevronDown size={16} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className='lg:col-span-3'>
            <h3 className='text-base sm:text-lg font-bold text-white'>Connect with us</h3>
            <div className='mt-6 flex justify-center gap-3 md:justify-start'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className='flex h-9 w-9 items-center justify-center rounded-full border border-green-100 text-green-100 transition-colors hover:border-white hover:bg-white hover:text-green-600'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className='hidden lg:col-span-3 lg:flex lg:items-center lg:justify-center'>
            <img
              src={footer_illsu}
              alt='Illustration of a person on a lawnmower'
              className='w-auto h-48'
            />
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className='bg-green-700'>
        <div className='px-6 py-4 sm:px-8 lg:px-12'>
          <div className='flex flex-col items-center gap-4 text-sm text-green-200 sm:flex-row sm:justify-between'>
            <div className='flex flex-col gap-4 text-center sm:flex-row sm:gap-6'>
              <a href='#' className='hover:text-white hover:underline'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white hover:underline'>
                Terms & Conditions
              </a>
            </div>
            <p className='text-center'>Copyright © 2025 GreenPal Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
