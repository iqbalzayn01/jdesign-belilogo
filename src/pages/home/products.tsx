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
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { usePagination } from '@/hooks/usePagination';
import { useProducts } from '@/hooks/useProducts';

// Card Produk Logo
const ProductCard: React.FC<{ product: any }> = ({ product }) => {
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
        {!product.sold && (
          <Badge className="absolute bottom-0 right-0 w-full bg-zinc-50 text-xs text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z" />
            </svg>
            <span>{localViewCount}</span>
          </Badge>
        )}
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
        {product.sold && (
          <Badge className="bg-white text-xs lg:text-sm text-black border border-zinc-200">
            Terjual
          </Badge>
        )}
      </div>
    </div>
  );
};

export default function Products() {
  const { soldProducts, availableProducts, loading, error } = useProducts();
  const {
    currentPage,
    pages,
    currentItems,
    handlePreviousPage,
    handleNextPage,
    totalPages,
    setCurrentPage,
  } = usePagination(availableProducts, {
    totalItems: availableProducts.length,
    itemsPerPage: 12,
  });

  const soldProductsCards = useMemo(() => {
    return soldProducts
      .slice(0, 4)
      .map((product) => <ProductCard key={product.id} product={product} />);
  }, [soldProducts]);

  const currentItemsCards = useMemo(() => {
    return currentItems.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [currentItems]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="bg-zinc-100">
      <div className="container mx-auto flex flex-col gap-10 px-5 py-20">
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Baru Terjual</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-1.5">
              <p className="text-sm">
                Berikut ini adalah beberapa logo yang baru terjual{' '}
                <span className="text-primarycustom font-bold">{`(${soldProducts.length})`}</span>{' '}
                Logo Design
              </p>
              <Link
                to={'/#'}
                className="bg-primarycustom w-fit md:w-auto px-5 py-2 text-sm text-white rounded-full"
              >
                Lihat Semua Logo yang Terjual
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {soldProductsCards}
          </div>
        </div>
        <Separator />
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Stok Lainnya</h2>
            <p className="text-sm">
              Semua logo yang telahdijual oleh semua designer total{' '}
              <span className="text-primarycustom font-bold">{`(${availableProducts.length})`}</span>{' '}
              Logo Design
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
            {currentItemsCards}
          </div>
        </div>
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
                onClick={handleNextPage}
                className="cursor-pointer"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

// import React, { useState, useMemo } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
//   PaginationEllipsis,
// } from '@/components/ui/pagination';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Link } from 'react-router-dom';
// import { Button } from '../../components/ui/button';

// // Asumsi: data produk diambil dari state atau API
// const products = Array.from({ length: 50 }, (_, index) => ({
//   id: index,
//   name: `Logo ${index + 1}`,
//   price: 100000,
//   sold: index < 12, // 4 produk pertama terjual
// }));

// // Komponen Kartu Produk
// const ProductCard: React.FC<{ product: (typeof products)[0] }> = ({
//   product,
// }) => {
//   const [localViewCount, setLocalViewCount] = useState(() => {
//     const storedViewCount = localStorage.getItem(`viewCount-${product.id}`);
//     return storedViewCount ? parseInt(storedViewCount) : 0;
//   });

//   const handleBeliLogoClick = () => {
//     const newViewCount = localViewCount + 1;
//     setLocalViewCount(newViewCount);
//     localStorage.setItem(`viewCount-${product.id}`, newViewCount.toString());
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <Card className="relative py-2.5">
//         {product.sold && (
//           <Badge className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-lime-400 border-none text-xl text-white px-12 rounded-none">
//             SOLD
//           </Badge>
//         )}
//         <CardContent className="px-2.5">
//           <div className="aspect-video rounded-xl bg-muted/50" />
//         </CardContent>
//         <Link
//           to={'/designer'}
//           className="absolute bottom-0 right-0 z-10 bg-zinc-50 text-[10px] text-zinc-500 border px-1 lg:px-3 py-1 rounded-full"
//         >
//           Lihat Designer
//         </Link>
//         {!product.sold && (
//           <Badge className="absolute bottom-0 right-0 w-full bg-zinc-50 text-xs text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="24px"
//               viewBox="0 -960 960 960"
//               width="24px"
//               fill="#000000"
//             >
//               <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z" />
//             </svg>
//             <span>{localViewCount}</span>
//           </Badge>
//         )}
//       </Card>
//       <div className="flex w-full justify-between">
//         <div className="flex flex-col gap-1">
//           <span className="text-xs">{product.name}</span>
//           <span className="text-[10px] text-green-600">
//             Rp.{product.price.toLocaleString()}
//           </span>
//         </div>
//         {!product.sold && (
//           <Button
//             className="bg-white hover:bg-zinc-100 text-xs lg:text-sm text-black border border-zinc-200"
//             asChild
//           >
//             <Link to={'/detaillogo'} onClick={handleBeliLogoClick}>
//               Beli Logo
//             </Link>
//           </Button>
//         )}
//         {product.sold && (
//           <Badge className="bg-white text-xs lg:text-sm text-black border border-zinc-200">
//             Terjual
//           </Badge>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function Products() {
//   const soldProducts = products.filter((product) => product.sold);
//   const availableProducts = products.filter((product) => !product.sold);

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;
//   const totalPages = Math.ceil(availableProducts.length / productsPerPage);

//   const currentProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * productsPerPage;
//     const endIndex = startIndex + productsPerPage;
//     return availableProducts.slice(startIndex, endIndex);
//   }, [currentPage, availableProducts, productsPerPage]);

//   const pages = useMemo(() => {
//     if (totalPages <= 7) {
//       return Array.from({ length: totalPages }, (_, i) => i + 1);
//     }

//     if (currentPage <= 4) {
//       return [1, 2, 3, 4, 5, '...', totalPages];
//     }

//     if (currentPage >= totalPages - 3) {
//       return [
//         1,
//         '...',
//         totalPages - 4,
//         totalPages - 3,
//         totalPages - 2,
//         totalPages - 1,
//         totalPages,
//       ];
//     }

//     return [
//       1,
//       '...',
//       currentPage - 1,
//       currentPage,
//       currentPage + 1,
//       '...',
//       totalPages,
//     ];
//   }, [currentPage, totalPages]);

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   return (
//     <section className="bg-zinc-100">
//       <div className="container mx-auto flex flex-col gap-10 px-5 py-20">
//         <div className="grid gap-10">
//           <div>
//             <h2 className="text-[38px]">Baru Terjual</h2>
//             <div className="flex flex-col md:flex-row md:items-center gap-1.5">
//               <p className="text-sm">
//                 Berikut ini adalah beberapa logo yang baru terjual{' '}
//                 <span className="text-primarycustom font-bold">{`(${soldProducts.length})`}</span>{' '}
//                 Logo Design
//               </p>
//               <Link
//                 to={'/#'}
//                 className="bg-primarycustom w-fit md:w-auto px-5 py-2 text-sm text-white rounded-full"
//               >
//                 Lihat Semua Logo yang Terjual
//               </Link>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {soldProducts.slice(0, 4).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//         <Separator />
//         <div className="grid gap-10">
//           <div>
//             <h2 className="text-[38px]">Stok Lainnya</h2>
//             <p className="text-sm">
//               Semua logo yang telahdijual oleh semua designer total{' '}
//               <span className="text-primarycustom font-bold">{`(${availableProducts.length})`}</span>{' '}
//               Logo Design
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious
//                 aria-disabled={currentPage === 1}
//                 onClick={handlePreviousPage}
//                 className="cursor-pointer"
//               />
//             </PaginationItem>
//             {pages.map((page, index) => (
//               <PaginationItem key={index}>
//                 {page === '...' ? (
//                   <PaginationEllipsis />
//                 ) : (
//                   <PaginationLink
//                     href="#"
//                     isActive={currentPage === page}
//                     onClick={() =>
//                       typeof page === 'number' && setCurrentPage(page)
//                     }
//                   >
//                     {page}
//                   </PaginationLink>
//                 )}
//               </PaginationItem>
//             ))}
//             <PaginationItem>
//               <PaginationNext
//                 aria-disabled={currentPage === totalPages}
//                 onClick={handleNextPage}
//                 className="cursor-pointer"
//               />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </section>
//   );
// }
