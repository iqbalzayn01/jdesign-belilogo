import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const informasi = [
  {
    desc: 'Jika anda sebagai Logo Desainer anda mempunyai peluang untuk bergabung diwebsite kami, halaman kami menyediakan logo desain yang telah tersedia. Logo tersebut bisa digunakan untuk branding atau website untuk pembeli.',
  },
  {
    desc: 'Tentunya kami menjual dengan harga yang terjangkau untuk membuka peluang logo desainer baru yang ingin bergabung. Jika anda memang desainer profesional, kami tidak mewajibkan untuk anda bergabung disini, karena logo adalah seni, dan logo bersifat mahal. Karena logo profesional sendiri harus memiliki makna yang kuat untuk membangun brand tersebut.',
  },
  {
    desc: 'Untuk bergabung disini, kami mewajibkan untuk anda para desainer baru untuk mengupload logo dari hasil Kekalahan atau Penolakan, yang dimaksud adalah Logo yang bersifat Kalah dalam Kontes Desain maupun Logo yang ditolak dalam hal Project pada client anda.',
  },
  {
    desc: 'Hal tersebut kami lakukan untuk membangun semangat para logo desainer Indonesia untuk tidak menyerah apabila memiliki gambar atau logo yang mengalami penolakan atau rejected. Silahkan anda bergabung untuk berkontribusi disitus ini, dan ajak para logo desainer baru untuk mewujudkan karya yang lebih banyak disetiap waktunya.',
  },
  {
    desc: 'Apabila style logo desain anda memiliki style logo yang menarik dan cocok pada branding atau website, kami akan menghubungi anda melalui pesan singkat di Whatsapp dengan memberikan Username dan Password sesuai yang kami generate pada Konfirmasi Kontribusi anda.',
  },
];

export default function SyaratKetentuan() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="cursor-pointer bg-transparent flex items-start justify-start text-xs text-primarycustom hover:bg-transparent shadow-none p-0 text-left whitespace-normal border-none outline-none focus:outline-none"
        >
          Syarat dan Ketentuan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] sm:max-h-full p-9 rounded-4xl flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-[25px]">
            Syarat dan Ketentuan
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex max-h-[400px] flex-col gap-2 text-gray-400">
          {informasi.map((info, index) => {
            return (
              <p key={index} className="text-xs pb-3">
                {info.desc}
              </p>
            );
          })}
          <span className="text-xs">
            Syarat & Ketentuan © 2020 JDesignLogo.com The Terms and Conditions
            are made entirely by us
          </span>
        </ScrollArea>
        <Separator />
        <DialogClose className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] p-3 text-sm md:text-lg rounded-full">
          Tutup Sementara
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
