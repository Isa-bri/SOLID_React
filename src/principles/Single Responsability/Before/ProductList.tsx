import { useEffect, useState } from "react";
import { Product } from "../../../types";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
    setLoading(false);
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2)}`;
  };

  const filterProducts = (filter: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
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
            placeholder="Filtrar produtos"
          />
          <ul>
            {filteredProducts.map((product) => (
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