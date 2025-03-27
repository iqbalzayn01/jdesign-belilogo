import { Undo2Icon } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import ListProductDesigner from './list-product-designer';

export default function DesignerPage() {
  const isBackButton = [
    {
      title: 'Kembali',
      href: '/',
      isBackButton: true,
      style:
        'bg-[#127CCF] hover:bg-[#127CCF] rounded-full text-[#C4E4FF] hover:text-white px-[45px] py-6',
      icon: <Undo2Icon />,
    },
  ];

  return (
    <>
      <Header
        isHeaderControl={false}
        pageLinks={isBackButton}
        backgroundColor="bg-primarycustom"
      />
      <ListProductDesigner />
      <Footer />
    </>
  );
}
