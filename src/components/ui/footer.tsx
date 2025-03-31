import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const dataFAQQuestion = [
  { name: 'About us', href: '/about' },
  { name: 'Terms and Conditions', href: '/#' },
  { name: 'Help Ask', href: '/#' },
  { name: 'Price', href: '/#' },
];
const dataServicesDesign = [
  { name: 'Logo Design', href: '/#' },
  { name: 'Custom TSirt Design', href: '/#' },
  { name: 'Icon Apps Design', href: '/#' },
  { name: 'Flyer Business', href: '/#' },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2A2B35]">
        <div className="container mx-auto px-5 md:px-20 py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
            <div className="flex max-w-[480px] flex-col gap-3">
              <h2 className="text-[22px] text-zinc-400">What's new?</h2>
              <p className="text-sm text-zinc-500">
                We are engaged in Graphic Design to help all Businesses or
                Companies that need our services in making logos, pamphlets,
                browsing designs, banners.
              </p>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="grid gap-3">
                <span className="md:text-nowrap text-[22px] text-zinc-400">
                  FAQ & Question
                </span>
                {dataFAQQuestion.map((link, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link to={link.href} className="text-sm text-zinc-500">
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList className="grid gap-3">
                <span className="md:text-nowrap text-[22px] text-zinc-400">
                  Services Design
                </span>
                {dataServicesDesign.map((link, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <Link to={link.href} className="text-sm text-zinc-500">
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex w-full lg:max-w-[200px] flex-col gap-3">
              <span className="text-[22px] text-zinc-400">Address</span>
              <span className="text-sm text-zinc-500">
                Indonesia 61258 Graha Asri Sukodono, Number A-24 East Java We
                are engaged in the design service
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright bg-[#141418] flex flex-col items-center justify-center text-center gap-2 p-8">
        <span className="text-[13px] text-zinc-400">
          Copyright © 2020 JDesign Logo. All right reserved.
        </span>
        <span className="text-xs text-zinc-700">
          We will serve you in the business of Graphic Design for Branding
          needs.
        </span>
      </div>
    </>
  );
}
