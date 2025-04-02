import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import OfferForm from './offer-form';

const dataSearchItems = [
  'Entertainment & Media',
  'Technology',
  'Fashion',
  'Food & Beverage',
  'Travel & Hospitality',
];

interface HeroProps {
  productsRef: React.RefObject<HTMLElement | null>;
}

export default function Hero({ productsRef }: HeroProps) {
  const handleSearchClick = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="flex items-center justify-center h-[600px] md:h-[920px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/assets/headernew2.jpg')`,
      }}
    >
      <section className="container mx-auto px-5 md:px-20">
        <div className="flex justify-between pt-16">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-[865px] text-center lg:text-left text-2xl md:text-[37.5px] lg:text-[60px] text-white">
              Buat Logo Impian Untuk Kualitas Branding yang Berkualitas
            </h1>
            <div className="flex items-center justify-center lg:justify-normal gap-5">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="cursor-pointer bg-white text-sm md:text-lg text-center text-primarycustom hover:text-primarycustom hover:drop-shadow-xl px-5 md:px-[45px] md:py-[29px] rounded-full"
                  >
                    Cari Sekarang
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-transparent border-0 p-0 hover:drop-shadow-xl shadow-none"
                  style={{ zIndex: 10 }}
                  align="start"
                  sideOffset={20}
                >
                  <div className="flex items-center gap-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="cursor-pointer justify-between px-5 md:px-10 text-sm md:text-lg text-primarycustom w-[250px] md:w-[375px] xl:w-[500px] md:h-12 border-none rounded-l-full"
                        >
                          Entertainment & Media
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[255px] md:w-[410px] xl:w-[600px]">
                        <DropdownMenuGroup>
                          {dataSearchItems.map((search, index) => (
                            <DropdownMenuItem
                              key={index}
                              className="px-5 md:px-10 text-sm md:text-lg text-primarycustom"
                            >
                              {search}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                      variant={'outline'}
                      className="cursor-pointer bg-transparent justify-between p-0 md:h-12 border-none rounded-full"
                      asChild
                    >
                      <Link to="#products" onClick={handleSearchClick}>
                        <span className="flex items-center justify-around bg-amber-500 w-10 md:w-16 h-9 md:h-12 rounded-r-full">
                          <Search color="white" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Link
                to={'/register'}
                className="bg-amber-500 text-sm md:text-lg text-center text-white hover:drop-shadow-xl px-5 md:px-[45px] py-2 md:py-[16px] rounded-full"
              >
                Daftar Kontributor
              </Link>
            </div>
          </div>
          <OfferForm />
        </div>
      </section>
    </div>
  );
}
