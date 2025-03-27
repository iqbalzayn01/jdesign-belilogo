import { useState, useEffect } from 'react';

interface UseProductsResult {
  products: any[];
  soldProducts: any[];
  availableProducts: any[];
  loading: boolean;
  error: string | null;
}

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulasi pengambilan data dari API atau state
    setTimeout(() => {
      try {
        const productData = Array.from({ length: 50 }, (_, index) => ({
          id: index,
          name: `Logo ${index + 1}`,
          price: 100000,
          sold: index < 12, // 4 produk pertama terjual
        }));
        setProducts(productData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Gagal mengambil data produk');
        setLoading(false);
      }
    }, 1000); // Simulasi penundaan 1 detik
  }, []);

  const soldProducts = products.filter((product) => product.sold);
  const availableProducts = products.filter((product) => !product.sold);

  return {
    products,
    soldProducts,
    availableProducts,
    loading,
    error,
  };
};
