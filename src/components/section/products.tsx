import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 py-20 h-screen">
        <h2 className="text-[38px]">Baru Terjual</h2>
        <div className="flex items-center gap-1.5">
          <p className="text-sm">
            Berikut ini adalah beberapa logo yang baru terjual (33) Logo Design
          </p>
          <Link
            to={'#'}
            className="bg-primarycustom px-5 py-2 text-sm text-white  rounded-full"
          >
            Lihat Semua Logo yang Terjual
          </Link>
        </div>
      </div>
    </section>
  );
}
