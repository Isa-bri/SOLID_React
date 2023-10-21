import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch("/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filterProducts = (filter: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.includes(filter)
    );
    setProducts(filteredProducts);
  };

  return {
    products,
    loading,
    filterProducts,
  };
}
