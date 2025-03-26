import React, { useState } from 'react';
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
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

// Asumsi: data produk diambil dari state atau API
const products = Array.from({ length: 29 }, (_, index) => ({
  id: index,
  name: `Logo ${index + 1}`,
  price: 100000,
}));

// Komponen Kartu Produk
const ProductCard: React.FC<{ product: (typeof products)[0] }> = ({
  product,
}) => {
  // view count sementara tersimpan di localStorage
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
      </Card>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs">{product.name}</span>
          <span className="text-[10px] text-green-600">
            Rp.{product.price.toLocaleString()}
          </span>
        </div>
        <Button
          className="bg-white hover:bg-zinc-100 text-sm text-black border border-zinc-200"
          asChild
        >
          <Link to={'/detaillogo'} onClick={handleBeliLogoClick}>
            Beli Logo
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function ListProductDesigner() {
  const availableProducts = products.filter((product) => product.id);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(availableProducts.length / productsPerPage);

  const currentProducts = availableProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages - 1; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      } else {
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <section className="bg-zinc-100">
      <div className="container mx-auto flex flex-col gap-10 px-5 py-20">
        <Separator />
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Logo dibuat oleh Designer</h2>
            <p className="text-sm">
              Semua logo yang telah dijual oleh semua designer total{' '}
              <span className="text-primarycustom font-bold">{`(${availableProducts.length})`}</span>{' '}
              Logo Design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                aria-disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="cursor-pointer"
              />
            </PaginationItem>
            {getPages().map((page, index) => (
              <PaginationItem key={index}>
                {page === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={() =>
                      typeof page === 'number' && setCurrentPage(page)
                    }
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                aria-disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="cursor-pointer"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
