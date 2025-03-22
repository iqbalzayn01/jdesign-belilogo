import { Link } from 'react-router-dom';
import LoginForm from '@/components/ui/login-form';

export default function Login() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
        <Link to={'/'}>kembali</Link>
      </div>
    </div>
  );
}
