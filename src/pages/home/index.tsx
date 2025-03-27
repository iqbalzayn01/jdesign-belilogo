import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Hero from './hero';
import Products from './products';

export default function Homepage() {
  const dribbbleLink = [
    {
      title: 'Dribbble',
      href: 'https://dribbble.com/jdesignlogo',
      style:
        'bg-[#127CCF] hover:bg-[#127CCF] rounded-full text-[#C4E4FF] hover:text-white px-[45px] py-6',
    },
  ];

  return (
    <>
      <Header isHeaderControl={true} pageLinks={dribbbleLink} />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}
