import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import { usePagination } from '@/hooks/usePagination';
import { useProducts } from '@/hooks/useProducts';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Undo2Icon } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="flex flex-col gap-5">
    <Card className="relative py-2.5">
      {product.sold && (
        <Badge className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-lime-400 border-none text-xl text-white px-12 rounded-none">
          SOLD
        </Badge>
      )}
      <CardContent className="px-2.5">
        <div className="aspect-video rounded-xl bg-muted/50" />
      </CardContent>
      <Link
        to={'/designer'}
        className="absolute bottom-0 right-0 z-10 bg-zinc-50 text-[10px] text-zinc-500 border px-1 lg:px-3 py-1 rounded-full"
      >
        Lihat Designer
      </Link>
    </Card>
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xs">{product.name}</span>
        <span className="text-[10px] text-green-600">
          Rp.{product.price.toLocaleString()}
        </span>
      </div>
      {product.sold && (
        <Badge className="bg-white text-xs lg:text-sm text-black border border-zinc-200">
          Terjual
        </Badge>
      )}
    </div>
  </div>
);

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  pages: (number | string)[];
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  totalPages,
  pages,
  handlePreviousPage,
  handleNextPage,
  setCurrentPage,
}) => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          aria-disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className="cursor-pointer"
        />
      </PaginationItem>
      {pages.map((page, index) => (
        <PaginationItem key={index}>
          {page === '...' ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          )}
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext
          aria-disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className="cursor-pointer"
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export default function Terjual() {
  const isBackButton = [
    {
      title: 'Kembali',
      href: '/',
      isBackButton: true,
      style:
        'bg-[#127CCF] hover:bg-[#127CCF] rounded-full text-[#C4E4FF] hover:text-white px-6 py-6',
      icon: <Undo2Icon />,
    },
  ];
  const { soldProducts, loading, error } = useProducts();
  const {
    currentPage,
    pages,
    handlePreviousPage,
    handleNextPage,
    totalPages,
    setCurrentPage,
    currentItems,
  } = usePagination(soldProducts, { itemsPerPage: 12 });
  const soldProductsCards = useMemo(() => {
    return currentItems.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [currentItems]);

  if (loading)
    return (
      <div className="container mx-auto flex flex-col gap-10 px-5 py-24">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="container mx-auto flex flex-col gap-10 px-5 py-24">
        <p>Error: {error}</p>
      </div>
    );

  return (
    <>
      <Header isHeaderControl={false} pageLinks={isBackButton} />
      <section className="bg-zinc-100">
        <div className="container mx-auto flex flex-col gap-10 px-5 md:px-20 py-24">
          <div className="grid gap-10">
            <div className="w-full">
              <h2 className="text-[38px]">Semua Terjual</h2>
              <p className="text-sm">
                Berikut ini adalah jumlah logo yang sudah terjual sebanyak{' '}
                <span className="text-primarycustom font-bold">{`(${soldProducts.length})`}</span>{' '}
                Logo Design
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {soldProductsCards}
            </div>
          </div>
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            pages={pages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
