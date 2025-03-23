import LoginForm from '@/components/ui/login-form';

export default function Login() {
  return (
    <>
      <div className="w-full h-[250px] bg-primarycustom">LOGO</div>
      <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="relative w-full max-w-[680px] flex items-center justify-center">
          <LoginForm className="absolute w-full" />
        </div>
      </div>
    </>
  );
}
