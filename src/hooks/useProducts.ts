/* eslint-disable @typescript-eslint/no-explicit-any */
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
    try {
      // Data dummy
      const productData = Array.from({ length: 50 }, (_, index) => ({
        id: index,
        name: `Logo ${index + 1}`,
        price: 100000,
        sold: index < 24, // produk yang terjual
      }));
      setProducts(productData);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || 'Gagal mengambil data produk');
      setLoading(false);
    }
  }, []);

  const soldProducts = products.filter((product) => product.sold);
  const availableProducts = products.filter((product) => !product.sold);

  console.log(loading);

  return {
    products,
    soldProducts,
    availableProducts,
    loading: false, // Karena tidak ada penundaan, loading selalu false
    error,
  };
};
