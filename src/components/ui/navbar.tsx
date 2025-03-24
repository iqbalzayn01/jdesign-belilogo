import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const components: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Testimonials', href: '/#' },
  { title: 'Portfolio', href: '/#' },
  { title: 'Fanspage', href: '/#' },
  { title: 'Contact Us', href: '/#' },
  { title: 'Price List', href: '/#' },
  { title: 'Login Seller', href: '/login' },
  { title: 'Dribbble', href: '/#' },
];

interface NavbarProps {
  className?: string;
  scroll?: boolean;
}

export default function Navbar({ className, scroll }: NavbarProps) {
  const getLinkStyle = (index: number) => {
    const baseStyle = 'text-[14px]';

    return `${baseStyle} ${
      index === components.length - 1
        ? `bg-[#127CCF] rounded-full px-[45px] py-5 ${
            scroll
              ? 'text-[#C4E4FF] hover:text-white'
              : 'text-[#C4E4FF] hover:text-white'
          }`
        : `p-[7.5px] ${
            scroll
              ? 'text-black hover:text-black/70'
              : 'text-[#C4E4FF] hover:text-white'
          }`
    }`;
  };

  return (
    <NavigationMenu
      className={`${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <NavigationMenuList className="flex-col items-start gap-9 lg:flex-row lg:items-center lg:gap-6">
        {components.map((component, index) => (
          <NavigationMenuItem key={index}>
            <Link to={component.href} className={getLinkStyle(index)}>
              {component.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
