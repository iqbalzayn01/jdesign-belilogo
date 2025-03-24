import { useState, useEffect } from 'react';
import Navbar from '@/components/ui/navbar';
import Logo from '@/components/ui/logo';
import Hero from '@/components/section/hero';
import Products from '@/components/section/products';
import Footer from '@/components/section/footer';

export default function Homepage() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`mx-auto px-3 md:px-10 py-[10px] fixed w-full top-0 z-20 ${
          scroll ? 'bg-white/85' : 'bg-transparent'
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Logo
            className={`w-[145px] p-[10px] ${
              scroll ? 'fill-primarycustom' : 'fill-white'
            }`}
          />
          <Navbar scroll={scroll} />
        </div>
      </header>
      <Hero />
      <Products />
      <Footer />
    </>
  );
}
