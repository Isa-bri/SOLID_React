import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2)}`;
  };

  const filterProducts = (filter: string) => {
    setFilter(filter);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <input
            onChange={(e) => filterProducts(e.target.value)}
            placeholder="Filtrar produtos"
          />
          <ul>
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((product) => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <p>{formatPrice(product.price)}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};