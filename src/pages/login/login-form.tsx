import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="relative px-5 py-10">
        <CardHeader className="gap-3">
          <CardTitle className="text-2xl lg:text-[40px] text-center">
            Login Jual Logo
          </CardTitle>
          <CardDescription className="text-xs lg:text-sm text-center">
            Silahkan login untuk melanjutkan ke halaman form upload logo anda,
            tulis username dan password dengan benar sesuai yang sudah terdaftar
            oleh admin.
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
                  id="nomortelp"
                  name="nomortelp"
                  type="text"
                  placeholder="Masukkan Nomor Telepon"
                  className="text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm font-normal p-5 md:p-6"
                  required
                />
              </div>
              <Button
                type="submit"
                className="cursor-pointer w-full bg-primarycustom hover:bg-primarycustom text-lg lg:text-xl font-normal py-[25px] lg:py-[30px] rounded-full"
              >
                Login Sekarang
              </Button>
            </div>
            <div className="mt-4 text-center text-xs">
              Anda ingin bergabung menjadi Contributor?{' '}
              <Link
                to={`/register`}
                className="text-xs text-primarycustom hover:underline underline-offset-4"
              >
                Daftar Sekarang
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
