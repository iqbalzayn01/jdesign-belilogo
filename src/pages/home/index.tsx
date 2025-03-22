import Navbar from '@/components/ui/navbar';
import Logo from '@/components/ui/logo';
import OfferForm from '@/components/ui/offer-form';

export default function Homepage() {
  return (
    <>
      <header className="mx-auto px-5 md:px-10 py-[10px] fixed w-full top-0 z-20">
        <div className="flex w-full items-center justify-between">
          <Logo className="w-[145px] p-[10px] fill-white" />
          <Navbar />
        </div>
      </header>
      <div
        className="h-[920px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/assets/headernew2.jpg')`,
        }}
      >
        <section className="container mx-auto px-5">
          <div className="flex justify-between pt-40">
            <h1 className="w-[865px] text-[75px] text-white">
              Buat Logo Impian Untuk Kualitas Branding yang Berkualitas
            </h1>
            <OfferForm />
          </div>
        </section>
      </div>
      <section className="bg-white">
        <div className="container mx-auto px-5 py-20 h-screen">
          <h2>Section Kedua</h2>
          <p>Konten untuk section kedua.</p>
        </div>
      </section>
    </>
  );
}
