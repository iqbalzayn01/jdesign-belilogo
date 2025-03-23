import Navbar from '@/components/ui/navbar';
import Logo from '@/components/ui/logo';
import Hero from '@/components/section/hero';
import Products from '@/components/section/products';

export default function Homepage() {
  return (
    <>
      <header className="mx-auto px-5 md:px-10 py-[10px] fixed w-full top-0 z-20">
        <div className="flex w-full items-center justify-between">
          <Logo className="w-[145px] p-[10px] fill-white" />
          <Navbar />
        </div>
      </header>
      <Hero />
      <Products />
    </>
  );
}
