import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Undo2Icon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './button';

const components: { title: string; href: string }[] = [
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
  { title: 'Dribbble', href: 'https://dribbble.com/jdesignlogo' },
];

interface NavbarProps {
  className?: string;
  scroll?: boolean;
}

export default function Navbar({ className, scroll }: NavbarProps) {
  const location = useLocation();

  const getLinkStyle = (index: number) => {
    const isDribbble = index === components.length - 1;
    const baseStyle = 'text-[14px]';

    return `${baseStyle} ${
      isDribbble
        ? `bg-[#127CCF] hover:bg-[#127CCF] rounded-full px-[45px] py-6 ${
            scroll
              ? 'text-[#C4E4FF] hover:text-white'
              : 'text-[#C4E4FF] hover:text-white'
          }`
        : `bg-transparent hover:bg-transparent border-none shadow-none p-[7.5px] ${
            scroll
              ? 'text-black hover:text-black/70'
              : 'text-[#C4E4FF] hover:text-white'
          }`
    }`;
  };

  const renderLink = (
    component: { title: string; href: string },
    index: number
  ) => {
    if (location.pathname === '/detaillogo' && component.title === 'Dribbble') {
      return (
        <Button
          className={`px-[450px] py-6 ${getLinkStyle(components.length - 1)}`}
          size="lg"
          asChild
        >
          <Link to="/">
            <Undo2Icon /> Kembali
          </Link>
        </Button>
      );
    }
    return (
      <Button className={getLinkStyle(index)} asChild>
        <Link to={component.href}>{component.title}</Link>
      </Button>
    );
  };

  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList className="flex-col items-start gap-6 lg:gap-2 lg:flex-row lg:items-center xl:gap-6">
        {components.map((component, index) => (
          <NavigationMenuItem key={index}>
            {renderLink(component, index)}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
