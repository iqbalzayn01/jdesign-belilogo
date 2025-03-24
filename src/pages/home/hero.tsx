import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import OfferForm from './offer-form';

export default function Hero() {
  return (
    <div
      className="flex items-center justify-center h-[600px] md:h-[920px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/assets/headernew2.jpg')`,
      }}
    >
      <section className="container mx-auto px-5">
        <div className="flex justify-between pt-16">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-[865px] text-center lg:text-left text-2xl md:text-[37.5px] lg:text-[75px] text-white">
              Buat Logo Impian Untuk Kualitas Branding yang Berkualitas
            </h1>
            <div className="flex items-center justify-center lg:justify-normal gap-5">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white text-sm md:text-xl text-center text-primarycustom hover:text-primarycustom hover:drop-shadow-xl px-5 md:px-[45px] md:py-[29px] rounded-full"
                  >
                    Cari Sekarang
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-transparent border-0 p-0 hover:drop-shadow-xl shadow-none"
                  align="start"
                  sideOffset={20}
                >
                  <div className="flex items-center gap-0">
                    <Button
                      variant={'outline'}
                      className="cursor-pointer justify-between p-0 w-[255px] md:w-[445px] xl:w-[600px] md:h-12 border-none rounded-l-full"
                    >
                      <span className="px-5 md:px-10 md:text-lg text-primarycustom">
                        Entertainment & Media
                      </span>
                    </Button>
                    <Button
                      variant={'outline'}
                      className="cursor-pointer bg-transparent justify-between p-0 md:h-12 border-none rounded-full"
                    >
                      <span className="flex items-center justify-around bg-amber-500 w-16 h-9 md:h-12 rounded-r-full">
                        <Search color="white" />
                      </span>
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Link
                to={'/register'}
                className="bg-amber-500 text-sm md:text-xl text-center text-white hover:drop-shadow-xl px-5 md:px-[45px] py-2 md:py-[16px] rounded-full"
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
