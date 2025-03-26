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
  return (
    <>
      <Header />
      <div className="pt-32">
        <div className="container mx-auto px-5">
          <div className="flex w-full flex-col md:flex-row justify-center gap-5">
            <Card className="size-full lg:size-[40%] py-2.5">
              <CardContent className="px-2.5">
                <div className="aspect-square rounded-xl bg-muted/50" />
              </CardContent>
            </Card>
            <div className="flex size-full lg:size-[35%] flex-col gap-6">
              <h2 className="text-lg">u for up logo Rp.100.000</h2>
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
                      <span className="text-[25px] font-semibold">
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
                <DialogTrigger className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] px-7 py-4 text-xl rounded-full">
                  Beli Logo
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
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
                        className="text-[15px] font-normal px-6 py-7"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="branding"
                        name="branding"
                        placeholder="Nama Branding (Alibaba)"
                        className="text-[15px] font-normal px-6 py-7"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="whatsappnumber"
                        name="whatsappnumber"
                        placeholder="Nomor Whatsapp"
                        className="text-[15px] font-normal px-6 py-7"
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="datalogo"
                        name="datalogo"
                        value="u for up logo | Design By Dimassetiawan"
                        placeholder="u for up logo | Design By Dimassetiawan"
                        className="text-[15px] font-normal px-6 py-7"
                        disabled
                      />
                    </div>
                    <div className="grid items-center gap-4">
                      <Input
                        id="datalogo"
                        name="datalogo"
                        value="Rp.100.000"
                        placeholder="Rp.100.000"
                        className="text-[15px] font-normal px-6 py-7"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-2">
                    <Button
                      type="submit"
                      className="cursor-pointer w-full bg-primarycustom hover:bg-sky-600 text-white hover:drop-shadow-[0_5px_5px_rgba(0,132,209,0.35)] p-7 text-xl rounded-full"
                    >
                      Beli Logo
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
