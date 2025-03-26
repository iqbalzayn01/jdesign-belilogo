import Logo from '@/components/ui/logo';
import Footer from '@/components/ui/footer';
import RegisterForm from './register-form';

export default function Register() {
  return (
    <>
      <div className="relative bg-zinc-100 flex w-full flex-col items-center justify-center">
        <div className="bg-primarycustom flex w-full h-full items-center justify-center py-16">
          <Logo className="fill-white w-[220px] mb-5" />
        </div>
        <RegisterForm className="w-full max-w-[680px] -translate-y-16 drop-shadow-2xl px-5 md:px-0" />
      </div>
      <Footer />
    </>
  );
}
