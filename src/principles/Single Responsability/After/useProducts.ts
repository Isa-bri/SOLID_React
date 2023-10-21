import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filterProducts = (filter: string) => {
    setFilter(filter);
  };

  return {
    products: products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    ),
    loading,
    filterProducts,
  };
}
