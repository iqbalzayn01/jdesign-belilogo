import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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
];

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component, index) => {
          return (
            <NavigationMenuItem key={index}>
              <Link to={component.href}>
                <NavigationMenuLink>{component.title}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
