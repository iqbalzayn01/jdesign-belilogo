import { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Undo2Icon } from 'lucide-react';
import Header from '@/components/ui/header';

const dataFitur = [
  {
    title: 'Mendapatkan Master File',
    desc: 'Master File .AI / .PSD / .CDR Salah satu File tersebut adalah bentuk file master atau mentahan yang dapat dikelola ulang untuk anda nantinya.',
  },
  {
    title: 'Gambar yang Detail/HD',
    desc: 'Logo yang anda beli sama persis dengan apa yang anda lihat di Dasboard Website, disamping adalah preview gambar logo yang sudah anda pilih sebelumnya.',
  },
  {
    title: 'Logo Original',
    desc: 'Gambar Logo yang ada didasboard adalah logo yang original dan dapat diolah kembali, vector berupa shape bisa anda ubah secara bebas.',
  },
];

export default function DetailLogo() {
  const isBackButton = [
    {
      title: 'Kembali',
      href: '/',
      isBackButton: true,
      style:
        'bg-[#127CCF] hover:bg-[#127CCF] rounded-full text-[#C4E4FF] hover:text-white px-6 py-6',
      icon: <Undo2Icon />,
    },
  ];

  const [name, setName] = useState('');
  const [branding, setBranding] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const validateInputs = useCallback(() => {
    if (!name) {
      alert('Silahkan tulis Nama Lengkap.');
      return false;
    }
    if (!branding) {
      alert('Silahkan tulis Nama Branding (Alibaba).');
      return false;
    }
    if (!whatsappNumber) {
      alert('Silahkan tulis Nomor Telepon Whatsap.');
      return false;
    }
    return true;
  }, [name, branding, whatsappNumber]);

  const handleBuyLogo = useCallback(() => {
    if (!validateInputs()) return;

    const message = `
      Nama Lengkap: ${name}
      Nama Branding: ${branding}
      Nomor Whatsapp: ${whatsappNumber}
      Data Logo: RK Logo | Design By Dimassetiawan
      Harga: Rp.100.000
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+6281230757358?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [name, branding, whatsappNumber, validateInputs]);

  return (
    <>
      <Header
        isHeaderControl={false}
        pageLinks={isBackButton}
        backgroundColor="bg-primarycustom"
      />
      <div className="bg-zinc-100">
        <div className="container mx-auto px-5 lg:px-12 xl:px-48 py-32">
          <div className="flex w-full flex-col md:flex-row justify-center gap-5">
            <Card className="size-full lg:size-[55%] py-2.5">
              <CardContent className="px-2.5">
                <div className="aspect-square rounded-xl bg-muted/50" />
              </CardContent>
            </Card>
            <div className="flex size-full lg:size-1/2 flex-col gap-3">
              <h2 className="text-lg">Nama Brand Logo Rp.100.000</h2>
              <p className="text-xs text-zinc-500 font-medium">
                Apa saja yang anda dapatkan setelah memesan logo dari
                JDesignLogo.com? Tentunya anda mendapatkan pelayanan revisi
                untuk mengganti Text awal dari logo yang anda beli, anda bebas
                mengganti text tersebut sesuai nama website atau brand anda.
                Serta bebas memerintahkan kepada desainer yang menghubungi anda
                untuk mengganti jenis-jenis font untuk text tersebut.
              </p>
              {dataFitur.map((fitur, index) => {
                return (
                  <div key={index} className="grid gap-2">
                    <div className="flex gap-2">
                      <img
                        src="/assets/check.svg"
                        alt="Icon Check"
                        width={25}
                        height={25}
                      />
                      <span className="text-lg md:text-[25px] text-zinc-500 font-semibold">
                        {fitur.title}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-medium">
                      {fitur.desc}
                    </p>
                  </div>
                );
              })}
              <Separator />
              <Dialog>
                <DialogTrigger className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] text-sm lg:text-lg font-normal py-2 rounded-full">
                  Beli Logo
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] py-10">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">
                      Form Konfirmasi Order
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid items-center gap-4">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm text-zinc-500 font-normal p-5 md:p-6"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="branding"
                        name="branding"
                        placeholder="Nama Branding (Alibaba)"
                        value={branding}
                        onChange={(e) => setBranding(e.target.value)}
                        className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm text-zinc-500 font-normal p-5 md:p-6"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="whatsappnumber"
                        name="whatsappnumber"
                        placeholder="Nomor Telepon Whatsapp"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm text-zinc-500 font-normal p-5 md:p-6"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="datalogo"
                        name="datalogo"
                        value={'RK Logo | Design By Dimassetiawan'}
                        className="bg-zinc-200 text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm text-zinc-500 font-normal p-5 md:p-6"
                        readOnly
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="datalogo"
                        name="datalogo"
                        value={'Rp.100.000'}
                        className="bg-zinc-200 text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm text-zinc-500 font-normal p-5 md:p-6"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-2">
                    <Button
                      type="button"
                      onClick={handleBuyLogo}
                      className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] text-sm lg:text-lg font-normal py-5 lg:py-6 rounded-full"
                    >
                      Beli Logo Sekarang
                    </Button>
                    <span className="text-xs text-center text-zinc-400 font-medium">
                      Konfirmasi Selanjutnya akan dilanjutkan di Whatsapp
                      Messenger.
                    </span>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
