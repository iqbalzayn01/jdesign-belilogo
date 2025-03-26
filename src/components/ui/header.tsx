import { useState, useEffect } from 'react';
import { Button } from './button';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Logo from '@/components/ui/logo';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const pathConfig: Record<string, { headercontrol: boolean }> = {
    '/': { headercontrol: true },
    '/detaillogo': { headercontrol: false },
  };

  const isHeadercontrol = pathConfig[location.pathname]?.headercontrol;

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`mx-auto px-3 md:px-10 py-[10px] fixed drop-shadow-xl lg:drop-shadow-none overflow-hidden w-full transition-all duration-500 ease-in-out top-0 z-20 ${
        scroll
          ? 'bg-white/85'
          : isHeadercontrol
          ? 'lg:bg-transparent bg-primarycustom'
          : 'bg-primarycustom'
      } ${isMenuOpen ? 'h-[600px]' : 'h-[85px] lg:h-auto'}`}
    >
      <div className="flex w-full items-center justify-between">
        <Logo
          className={`w-[145px] p-[10px] ${
            scroll ? 'fill-primarycustom' : 'fill-white'
          }`}
        />
        <div
          className={`absolute lg:relative lg:w-auto translate-y-3/5 lg:translate-y-0`}
        >
          <Navbar scroll={scroll} />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer lg:hidden bg-transparent hover:bg-white/5 border-zinc-400/25 shadow-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className={`${scroll ? 'fill-primarycustom' : 'fill-white/25'}`}
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Button>
      </div>
    </header>
  );
}
