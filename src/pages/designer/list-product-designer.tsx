import React, { useState, useMemo } from 'react';
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
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { usePagination } from '@/hooks/usePagination';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [localViewCount, setLocalViewCount] = useState(() => {
    const storedViewCount = localStorage.getItem(`viewCount-${product.id}`);
    return storedViewCount ? parseInt(storedViewCount) : 0;
  });

  const handleBeliLogoClick = () => {
    const newViewCount = localViewCount + 1;
    setLocalViewCount(newViewCount);
    localStorage.setItem(`viewCount-${product.id}`, newViewCount.toString());
  };

  return (
    <div className="flex flex-col gap-5">
      <Card className="relative py-2.5">
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
        {!product.sold && (
          <Button
            className="bg-white hover:bg-zinc-100 text-xs lg:text-sm text-black border border-zinc-200"
            asChild
          >
            <Link to={'/detaillogo'} onClick={handleBeliLogoClick}>
              Beli Logo
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

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

export default function ListProductDesigner() {
  const { availableProducts, loading, error } = useProducts();
  const {
    currentPage,
    pages,
    currentItems,
    handlePreviousPage,
    handleNextPage,
    totalPages,
    setCurrentPage,
  } = usePagination(availableProducts, {
    itemsPerPage: 12,
  });

  const currentItemsCards = useMemo(() => {
    return currentItems.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [currentItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="bg-zinc-100">
      <div className="container mx-auto flex flex-col gap-10 px-5 md:px-10 py-24">
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Logo dibuat oleh Designer</h2>
            <p className="text-sm">
              Semua logo yang telah dijual oleh semua designer total{' '}
              <span className="text-primarycustom font-bold">{`(${availableProducts.length})`}</span>{' '}
              Logo Design
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-10">
            {currentItemsCards}
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
  );
}
