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

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {components.map((component, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link
                to={component.href}
                className={`text-[14px] text-[#C4E4FF] hover:text-white ${
                  index === components.length - 1
                    ? 'bg-[#127CCF] rounded-full px-[45px] py-5'
                    : 'p-[7.5px]'
                }`}
              >
                {component.title}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
