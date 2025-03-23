import Logo from '@/components/ui/logo';
import LoginForm from '@/components/ui/login-form';
import Footer from '@/components/section/footer';

export default function Login() {
  return (
    <>
      <div className="relative flex justify-center w-full h-[250px] bg-primarycustom">
        <Logo className="fill-white w-[220px] absolute top-[4.5rem]" />
      </div>
      <div className="relative flex flex-col min-h-[61svh] w-full items-center justify-center p-6 md:p-10">
        <div className=" w-full flex items-center justify-center">
          <LoginForm className="absolute w-full max-w-[680px] -top-24 drop-shadow-2xl px-5 md:px-0" />
        </div>
      </div>
      <Footer />
    </>
  );
}
