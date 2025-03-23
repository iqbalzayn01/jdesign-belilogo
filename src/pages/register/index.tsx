import RegisterForm from '@/components/ui/register-form';

export default function Register() {
  return (
    <>
      <div className="w-full h-[250px] bg-primarycustom">LOGO</div>
      <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="relative w-full max-w-[680px] flex items-center justify-center">
          <RegisterForm className="absolute w-full" />
        </div>
      </div>
    </>
  );
}
