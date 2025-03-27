import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import InfoOffer from './info-offer';

export default function OfferForm() {
  return (
    <Card
      className="relative hidden lg:flex w-[584px] shadow-2xl rounded-3xl"
      // style={{
      //   padding: 'clamp(2rem, 5vw, 3rem) clamp(0.5rem, 1vw, 1rem',
      // }}
    >
      <InfoOffer />
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-normal">
          Buat Penawaran Anda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-xs text-gray-400">
                Nama Lengkap anda?
              </Label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Putri Weni Ramadhani"
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-black transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="brand" className="text-xs text-gray-400">
                Nama Branding anda?
              </Label>
              <input
                id="brand"
                name="brand"
                type="text"
                placeholder="Weni Collection"
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-black transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price" className="text-xs text-gray-400">
                Berapa Budget anda untuk membuat logo? Tidak menerima dibawah
                Rp. 50.000
              </Label>
              <div className="flex items-end">
                <span className="border-b border-primarycustom pb-2">Rp</span>
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder=""
                  className="h-9 w-full min-w-0 bg-transparent px-1 py-1 text-[14px] placeholder:text-black transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="brand" className="text-xs text-gray-400">
                Bergerak dibidang apa Branding anda?
              </Label>
              <input
                id="brand"
                name="brand"
                type="text"
                placeholder="Olshop Kecantikan"
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-black transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="info" className="text-xs text-gray-400">
                Berikan kami sedikit informasi mengenai logo yang ingin anda
                pesan!
              </Label>
              <Textarea
                id="info"
                name="info"
                placeholder="Saya ingin logonya nanti memiliki warna orange dan objeknya yang simple saja dan mudah di ingat"
                className="h-9 w-full min-w-0 bg-transparent px-0 py-1 text-[14px] placeholder:text-black transition-colors duration-300 ease-in border-0 shadow-none rounded-none outline-0 focus-visible:ring-0 focus-visible:border-ring border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5">
        <Button className="cursor-pointer bg-primarycustom hover:bg-sky-700 px-14 py-5 text-base rounded-full">
          Konfirmasi
        </Button>
        <span className="text-[10px] text-gray-400">
          Konfirmasi Mengenai konsep logo apa yang anda inginkan, akan kami
          Hubungi melalui Whatsapp (Form Penawaran ini hanya ada di Versi Web
          Desktop, Gunakan browser Chrome,Mozila dan Sejenisnya).
        </span>
      </CardFooter>
    </Card>
  );
}
