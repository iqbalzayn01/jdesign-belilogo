import Navbar from '@/components/ui/navbar';

export default function Homepage() {
  return (
    <>
      <header className="container mx-auto px-5">
        <div className="flex w-full items-center justify-between">
          <h1>JDesign</h1>
          <Navbar />
        </div>
      </header>
      <main className="container mx-auto px-5">
        <section className="flex items-center py-20">
          <h1 className="w-[795px] text-[75px]">
            Buat Logo Impian Untuk Kualitas Branding yang Berkualitas
          </h1>
        </section>
      </main>
    </>
  );
}
