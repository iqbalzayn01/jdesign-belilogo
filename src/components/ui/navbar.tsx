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

export default function Navbar({ scroll }: { scroll?: boolean }) {
  const getLinkStyle = (index: number) => {
    const isDribbble = index === components.length - 1;
    const baseStyle = 'text-[14px]';

    if (isDribbble) {
      return `${baseStyle} bg-[#127CCF] rounded-full px-[45px] py-5 ${
        scroll
          ? 'text-[#C4E4FF] hover:text-white'
          : 'text-[#C4E4FF] hover:text-white'
      }`;
    }

    return `${baseStyle} p-[7.5px] ${
      scroll
        ? 'text-black hover:text-black/70'
        : 'text-[#C4E4FF] hover:text-white'
    }`;
  };

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="gap-6">
        {components.map((component, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link to={component.href} className={getLinkStyle(index)}>
                {component.title}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
