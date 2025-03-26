import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import SyaratKetentuan from './syarat-ketentuan';

export default function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="relative lg:px-5 py-10">
        <CardHeader className="gap-3">
          <CardTitle className="text-2xl lg:text-[40px] text-center">
            Kontribusi Registrasi
          </CardTitle>
          <CardDescription className="text-xs lg:text-sm text-center">
            Silahkan melakukan registrasi untuk kami tinjau logo style yang anda
            punya, sebagai logo desainer artinya mengerti bahwa logo yang dijual
            bukan dari logo project.
          </CardDescription>
          <Link
            to={'/'}
            className="absolute top-2 right-2 w-16 lg:w-20 h-16 lg:h-20 bg-red-500 hover:drop-shadow-[0_6px_6px_rgba(251,44,54,0.25)] text-sm lg:text-base text-white rounded-full flex items-center justify-center"
          >
            kembali
          </Link>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nama Lengkap"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Masukkan Username"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan Password"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email myname@gmail.com"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Jl Majapahit 80 Jawa Timur Indonesia"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="nomorwhatsapp"
                  name="nomorwhatsapp"
                  type="text"
                  placeholder="Nomor Whatsapp"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="nomortelp"
                  name="nomortelp"
                  type="text"
                  placeholder="Link Portfolio Dribbble,Instagram,Behance,Google Drive dll"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <div className="flex flex-col md:flex-row md:gap-1 text-xs">
                    Semua data anda akan kami terima dan anda menyetujui?{' '}
                    <SyaratKetentuan />
                  </div>
                </label>
              </div>
              <Button
                type="submit"
                className="cursor-pointer w-full bg-primarycustom hover:bg-primarycustom text-lg lg:text-xl font-normal py-[25px] lg:py-[30px] rounded-full"
              >
                Konfirmasi Registrasi
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
