import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
    const filteredProducts = products.filter((product) =>
      product.name.includes(filter)
    );
    setProducts(filteredProducts);
  };

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
          />
          <ul>
            {products.map((product) => (
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