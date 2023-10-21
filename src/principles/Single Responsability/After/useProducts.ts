import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filterProducts = (filter: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return {
    products: filteredProducts,
    loading,
    filterProducts,
  };
}
