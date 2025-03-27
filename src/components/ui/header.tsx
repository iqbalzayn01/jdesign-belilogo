import { useState, useEffect, useMemo } from 'react';
import { Button } from './button';
import { Navbar } from '@/components/ui/navbar';
import Logo from '@/components/ui/logo';

interface LinkItem {
  title: string;
  href: string;
  isBackButton?: boolean;
  style?: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  pageLinks?: LinkItem[];
  isHeaderControl: boolean;
  headerStyle?: string;
  backgroundColor?: string;
}

export default function Header({
  pageLinks,
  isHeaderControl,
  headerStyle: additionalHeaderStyle,
  backgroundColor,
}: HeaderProps) {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const staticLinks = [
    { title: 'Home', href: 'https://dionsubaktiar.site/' },
    {
      title: 'Testimonials',
      href: 'https://www.facebook.com/dandyMsJ/posts/657209381346893',
    },
    { title: 'Portfolio', href: 'https://dionsubaktiar.site/#page-2' },
    { title: 'Fanspage', href: 'https://www.facebook.com/JUPLERDESIGN/' },
    {
      title: 'Contact Us',
      href: 'https://dionsubaktiar.site/belilogo/#page-contact',
    },
    { title: 'Price List', href: 'https://dionsubaktiar.site/#page-1' },
    { title: 'Login Seller', href: '/login' },
  ];

  const allLinks = pageLinks ? [...staticLinks, ...pageLinks] : staticLinks;

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultHeaderStyle = useMemo(() => {
    return `mx-auto px-3 md:px-10 py-[10px] fixed drop-shadow-xl lg:drop-shadow-none overflow-hidden w-full transition-all duration-500 ease-in-out top-0 z-20 ${
      scroll
        ? 'bg-white/85'
        : isHeaderControl
        ? 'lg:bg-transparent bg-primarycustom'
        : 'bg-primarycustom'
    } ${isMenuOpen ? 'h-[600px]' : 'h-[85px] lg:h-auto'}`;
  }, [scroll, isHeaderControl, isMenuOpen]);

  const headerStyle = useMemo(() => {
    return `${defaultHeaderStyle} ${additionalHeaderStyle || ''} ${
      backgroundColor || ''
    }`;
  }, [defaultHeaderStyle, additionalHeaderStyle, backgroundColor]);

  const logoStyle = useMemo(() => {
    return `w-[145px] p-[10px] ${scroll ? 'fill-primarycustom' : 'fill-white'}`;
  }, [scroll]);

  const menuButtonStyle = useMemo(() => {
    return `cursor-pointer lg:hidden bg-transparent hover:bg-white/5 border-zinc-400/25 shadow-none ${
      scroll ? 'fill-primarycustom' : 'fill-white/25'
    }`;
  }, [scroll]);

  return (
    <header className={headerStyle}>
      <div className="flex w-full items-center justify-between">
        <Logo className={logoStyle} />
        <div className="absolute lg:relative lg:w-auto translate-y-3/5 lg:translate-y-0">
          <Navbar scroll={scroll} links={allLinks} />
        </div>
        <Button
          variant="outline"
          size="icon"
          className={menuButtonStyle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Button>
      </div>
    </header>
  );
}

// import { useState, useEffect } from 'react';
// import { Button } from './button';
// import { useLocation } from 'react-router-dom';
// import Navbar from '@/components/ui/navbar';
// import Logo from '@/components/ui/logo';

// export default function Header() {
//   const [scroll, setScroll] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const pathConfig: Record<string, { headercontrol: boolean }> = {
//     '/': { headercontrol: true },
//     '/detaillogo': { headercontrol: false },
//   };

//   const isHeadercontrol = pathConfig[location.pathname]?.headercontrol;

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 100) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className={`mx-auto px-3 md:px-10 py-[10px] fixed drop-shadow-xl lg:drop-shadow-none overflow-hidden w-full transition-all duration-500 ease-in-out top-0 z-20 ${
//         scroll
//           ? 'bg-white/85'
//           : isHeadercontrol
//           ? 'lg:bg-transparent bg-primarycustom'
//           : 'bg-primarycustom'
//       } ${isMenuOpen ? 'h-[600px]' : 'h-[85px] lg:h-auto'}`}
//     >
//       <div className="flex w-full items-center justify-between">
//         <Logo
//           className={`w-[145px] p-[10px] ${
//             scroll ? 'fill-primarycustom' : 'fill-white'
//           }`}
//         />
//         <div
//           className={`absolute lg:relative lg:w-auto translate-y-3/5 lg:translate-y-0`}
//         >
//           <Navbar scroll={scroll} />
//         </div>
//         <Button
//           variant="outline"
//           size="icon"
//           className="cursor-pointer lg:hidden bg-transparent hover:bg-white/5 border-zinc-400/25 shadow-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 -960 960 960"
//             width="24px"
//             className={`${scroll ? 'fill-primarycustom' : 'fill-white/25'}`}
//           >
//             <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
//           </svg>
//         </Button>
//       </div>
//     </header>
//   );
// }
