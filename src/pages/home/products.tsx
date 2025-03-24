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
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

// Asumsi: data produk diambil dari state atau API
const products = Array.from({ length: 382 }, (_, index) => ({
  id: index,
  name: `Logo ${index + 1}`,
  price: 100000,
  sold: index < 33, // 4 produk pertama terjual
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
          className="absolute bottom-0 right-0 z-10 bg-zinc-50 text-xs text-zinc-500 border px-3 py-1 rounded-full"
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
            className="bg-white hover:bg-zinc-100 text-sm text-black border border-zinc-200"
            asChild
          >
            <Link to={'/detail-logo'} onClick={handleBeliLogoClick}>
              Beli Logo
            </Link>
          </Button>
        )}
        {product.sold && (
          <Badge className="bg-white text-sm text-black border border-zinc-200">
            Terjual
          </Badge>
        )}
      </div>
    </div>
  );
};

export default function Products() {
  const soldProducts = products.filter((product) => product.sold);
  const availableProducts = products.filter((product) => !product.sold); // Produk yang belum terjual

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
            {soldProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Separator />
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Stok Lainnya</h2>
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

// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from '@/components/ui/pagination';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Link } from 'react-router-dom';
// import { Button } from '../ui/button';

// export default function Products() {
//   const dataTerjual: number = 33;
//   const dataProduct: number = 349;
//   const cardSoldCount: number = 4;
//   const viewCount: number = 4;

//   return (
//     <section className="bg-zinc-100">
//       <div className="container mx-auto flex flex-col gap-10 px-5 py-20">
//         <div className="grid gap-10">
//           <div>
//             <h2 className="text-[38px]">Baru Terjual</h2>
//             <div className="flex items-center gap-1.5">
//               <p className="text-sm">
//                 Berikut ini adalah beberapa logo yang baru terjual{' '}
//                 <span className="text-primarycustom font-bold">{`(${dataTerjual})`}</span>{' '}
//                 Logo Design
//               </p>
//               <Link
//                 to={'#'}
//                 className="bg-primarycustom px-5 py-2 text-sm text-white  rounded-full"
//               >
//                 Lihat Semua Logo yang Terjual
//               </Link>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {Array.from({ length: cardSoldCount }, (_, index) => {
//               return (
//                 <div key={index} className="flex flex-col gap-5">
//                   <Card className="relative py-2.5">
//                     <Badge className="absolute top-0 left-0 bg-linear-to-r from-green-500 to-lime-400 border-none text-xl text-white px-7 rounded-none">
//                       SOLD
//                     </Badge>
//                     <CardContent className="px-2.5">
//                       <div className="aspect-video rounded-xl bg-muted/50" />
//                     </CardContent>
//                     <Link
//                       to={'/designer'}
//                       className="absolute bottom-0 right-0 bg-zinc-50 text-xs text-zinc-500 border px-3 py-1 rounded-full"
//                     >
//                       Lihat Designer
//                     </Link>
//                   </Card>
//                   <div className="flex w-full justify-between">
//                     <div className="flex flex-col gap-1">
//                       <span className="text-xs">Nama Logo</span>
//                       <span className="text-[10px] text-green-600">
//                         Rp.100.000
//                       </span>
//                     </div>
//                     <Badge className="bg-white text-sm text-black border border-zinc-200">
//                       Terjual
//                     </Badge>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <Separator />
//         <div className="grid gap-10">
//           <div>
//             <h2 className="text-[38px]">Stok Lainnya</h2>
//             <p className="text-sm">
//               Semua logo yang telah dijual oleh semua designer total{' '}
//               <span className="text-primarycustom font-bold">{`(${dataProduct})`}</span>{' '}
//               Logo Design
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {Array.from({ length: dataProduct }, (_, index) => {
//               return (
//                 <div key={index} className="flex flex-col gap-5">
//                   <Card className="relative py-2.5">
//                     <CardContent className="px-2.5">
//                       <div className="aspect-video rounded-xl bg-muted/50" />
//                     </CardContent>
//                     <Link
//                       to={'/designer'}
//                       className="absolute bottom-0 right-0 z-10 bg-zinc-50 text-xs text-zinc-500 border px-3 py-1 rounded-full"
//                     >
//                       Lihat Designer
//                     </Link>
//                     <Badge className="absolute bottom-0 right-0 w-full bg-zinc-50 text-xs text-zinc-500 border border-zinc-200 px-3 py-1 rounded-full">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         height="24px"
//                         viewBox="0 -960 960 960"
//                         width="24px"
//                         fill="#000000"
//                       >
//                         <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Z" />
//                       </svg>
//                       <span>{viewCount ? viewCount : 0}</span>
//                     </Badge>
//                   </Card>
//                   <div className="flex w-full justify-between">
//                     <div className="flex flex-col gap-1">
//                       <span className="text-xs">Nama Logo</span>
//                       <span className="text-[10px] text-green-600">
//                         Rp.100.000
//                       </span>
//                     </div>
//                     <Button
//                       className="bg-white hover:bg-zinc-100 text-sm text-black border border-zinc-200"
//                       asChild
//                     >
//                       <Link to={'/belilogo'}>Beli Logo</Link>
//                     </Button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious href="#" />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">1</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#" isActive>
//                 2
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink href="#">3</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext href="#" />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//     </section>
//   );
// }
