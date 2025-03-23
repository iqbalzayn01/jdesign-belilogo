import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const dataSold = [{ name: 'logo 1' }, { name: 'logo 2' }, { name: 'logo 3' }];

export default function Products() {
  const cardCount: number = 9;

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col gap-10 px-5 py-20">
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Baru Terjual</h2>
            <div className="flex items-center gap-1.5">
              <p className="text-sm">
                Berikut ini adalah beberapa logo yang baru terjual (33) Logo
                Design
              </p>
              <Link
                to={'#'}
                className="bg-primarycustom px-5 py-2 text-sm text-white  rounded-full"
              >
                Lihat Semua Logo yang Terjual
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {dataSold.map((sold, index) => {
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{sold.name}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className="grid gap-10">
          <div>
            <h2 className="text-[38px]">Stok Lainnya</h2>
            <p className="text-sm">
              Semua logo yang telah dijual oleh semua designer total (349) Logo
              Design
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {Array.from({ length: cardCount }, (_, index) => {
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
