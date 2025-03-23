import Logo from '@/components/ui/logo';
import RegisterForm from '@/components/ui/register-form';
import Footer from '@/components/section/footer';

export default function Register() {
  return (
    <>
      <div className="relative flex justify-center w-full h-[250px] bg-primarycustom">
        <Logo className="fill-white w-[220px] absolute top-[4.5rem]" />
      </div>
      <div className="relative flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 mb-12">
        <div className="w-full flex items-center justify-center">
          <RegisterForm className="absolute w-full max-w-[680px] -top-24 drop-shadow-2xl px-5 md:px-0" />
        </div>
      </div>
      <Footer />
    </>
  );
}
