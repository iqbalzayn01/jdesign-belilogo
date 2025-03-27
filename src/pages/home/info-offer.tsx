import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

const informasi = [
  {
    desc: 'Penawaran ini bertujuan untuk menyeimbangkan budget anda dalam melakukan pembuatan logo profesional.',
  },
  {
    desc: 'Jika budget dibawah 200 Ribu, anda akan mendapatkan pelayanan 1x Batas revisi keseluruhan logo, apabila tidak cocok dengan hasil desain.',
  },
  {
    desc: 'Dan dengan budget diatas 200 Ribu, anda mendapatkan keseluruhan file yang terdiri dari master logo, file png transparant, favicon, dan logo dengan konsep satu warna.',
  },
  {
    desc: 'Budget dibawah 300 Ribu, kami tidak bisa memberikan pelayanan pembuatan logo dengan konsep maskod logo dan character wajah.',
  },
  {
    desc: 'Dengan maksimal revisi 3x pilihan logo, tentunya anda akan mudah melakukan pemilihan logo yang sangat cocok untuk branding anda, ini jika berada di budget diatas 300 Ribu.',
  },
  {
    desc: 'Dengan maksimal revisi 3x pilihan logo, tentunya anda akan mudah melakukan pemilihan logo yang sangat cocok untuk branding anda, ini jika berada di budget diatas 300 Ribu.',
  },
];

export default function InfoOffer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer absolute -top-5 -right-5 size-14 bg-white hover:bg-gray-200 text-sm md:text-3xl text-primarycustom font-normal drop-shadow-lg rounded-full flex items-center justify-center">
          ?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] p-9 rounded-4xl">
        <DialogHeader>
          <DialogTitle className="text-[25px]">Informasi Penawaran</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-5 text-gray-400">
          {informasi.map((info, index) => {
            return (
              <span key={index} className="text-sm">
                {info.desc}
              </span>
            );
          })}
          <span className="text-xs">
            Syarat & Ketentuan © 2020 JDesignLogo.com The Terms and Conditions
            are made entirely by us
          </span>
        </DialogDescription>
        {/* <div className="flex flex-col gap-5 text-gray-400">
          {informasi.map((info, index) => {
            return (
              <p key={index} className="text-sm">
                {info.desc}
              </p>
            );
          })}
          <span className="text-xs">
            Syarat & Ketentuan © 2020 JDesignLogo.com The Terms and Conditions
            are made entirely by us
          </span>
        </div> */}
        <DialogClose className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] p-3 text-lg md:text-xl rounded-full">
          Tutup Sementara
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
