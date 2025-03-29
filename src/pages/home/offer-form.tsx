import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { NumericFormat } from 'react-number-format';
import InfoOffer from './info-offer';

export default function OfferForm() {
  const [name, setName] = useState('');
  const [namaBranding, setNamaBranding] = useState('');
  const [budgetPenawaran, setBudgetPenawaran] = useState('');
  const [brand, setBrand] = useState('');
  const [infoLogo, setInfoLogo] = useState('');

  const validateInputs = useCallback(() => {
    if (!name) {
      alert('Silahkan tulis Nama Lengkap Anda.');
      return false;
    }
    if (!namaBranding) {
      alert('Silahkan tulis Nama Branding (Weni Collection).');
      return false;
    }
    if (!budgetPenawaran) {
      alert('Silahkan tulis Budget Penawaran.');
      return false;
    }
    if (!brand) {
      alert('Silahkan tulis Bidang Brand Anda.');
      return false;
    }
    if (!infoLogo) {
      alert('Silahkan tulis Informasi Logo Anda.');
      return false;
    }
    return true;
  }, [name, namaBranding, budgetPenawaran, brand, infoLogo]);

  const formatRupiah = useCallback((angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(angka);
  }, []);

  const handlePenawaran = useCallback(() => {
    if (!validateInputs()) return;

    // Format budgetPenawaran sebelum dikirim
    const formattedBudget = budgetPenawaran
      ? formatRupiah(parseInt(budgetPenawaran))
      : '0';

    const message = `
      Nama Lengkap: ${name}
      Nama Branding: ${namaBranding}
      Budget Penawaran: Rp ${formattedBudget}
      Bidang Brand: ${brand}
      Informasi Logo: ${infoLogo}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+6281230757358?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, [
    name,
    namaBranding,
    budgetPenawaran,
    brand,
    infoLogo,
    validateInputs,
    formatRupiah,
  ]);

  const handleBudgetChange = (values: {
    formattedValue: string;
    value: string;
  }) => {
    setBudgetPenawaran(values.value);
  };

  return (
    <Card className="relative hidden lg:flex w-[584px] shadow-2xl rounded-3xl">
      <InfoOffer />
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-normal">
          Buat Penawaran Anda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-xs text-gray-400">
                Nama Lengkap anda?
              </Label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Putri Weni Ramadhani"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-zinc-600 transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="brand" className="text-xs text-gray-400">
                Nama Branding anda?
              </Label>
              <input
                id="namaBrand"
                name="namaBrand"
                type="text"
                placeholder="Weni Collection"
                value={namaBranding}
                onChange={(e) => setNamaBranding(e.target.value)}
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-zinc-600 transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price" className="text-xs text-gray-400">
                Berapa Budget anda untuk membuat logo? Tidak menerima dibawah
                Rp. 50.000
              </Label>
              <div className="flex items-end">
                <span className="border-b border-primarycustom text-zinc-600 pr-2 pb-2">
                  Rp
                </span>
                <NumericFormat
                  thousandSeparator=","
                  decimalSeparator="."
                  value={budgetPenawaran}
                  onValueChange={handleBudgetChange}
                  className="h-9 w-full min-w-0 bg-transparent px-1 py-1 text-[14px] placeholder:text-zinc-600 transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="brand" className="text-xs text-gray-400">
                Bergerak dibidang apa Branding anda?
              </Label>
              <input
                id="brand"
                name="brand"
                type="text"
                placeholder="Olshop Kecantikan"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="h-9 w-full min-w-0 bg-transparent py-1 text-[14px] placeholder:text-zinc-600 transition-colors duration-300 ease-in border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="info" className="text-xs text-gray-400">
                Berikan kami sedikit informasi mengenai logo yang ingin anda
                pesan!
              </Label>
              <Textarea
                id="infoLogo"
                name="infoLogo"
                placeholder="Saya ingin logonya nanti memiliki warna orange dan objeknya yang simple saja dan mudah di ingat"
                value={infoLogo}
                onChange={(e) => setInfoLogo(e.target.value)}
                className="h-9 w-full min-w-0 bg-transparent px-0 py-1 text-[14px] placeholder:text-zinc-600 transition-colors duration-300 ease-in shadow-none rounded-none ring-0 outline-0 focus-visible:ring-0 border-x-0 border-t-0 border-b focus:outline-none focus:border-primarycustom"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-5">
        <Button
          type="submit"
          onClick={handlePenawaran}
          className="cursor-pointer bg-primarycustom hover:bg-sky-700 px-14 py-5 text-base rounded-full"
        >
          Konfirmasi
        </Button>
        <span className="text-[10px] text-gray-400">
          Konfirmasi Mengenai konsep logo apa yang anda inginkan, akan kami
          Hubungi melalui Whatsapp (Form Penawaran ini hanya ada di Versi Web
          Desktop, Gunakan browser Chrome,Mozila dan Sejenisnya).
        </span>
      </CardFooter>
    </Card>
  );
}
