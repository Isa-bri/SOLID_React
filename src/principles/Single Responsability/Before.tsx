import { useEffect, useState } from "react"

type Product = {
  price: number,
  id: number,
  name: string,
}

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const response = await fetch("/products");
    const data = await response.json();
    setProducts(data);
  };
  
  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2)}`
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <p>{formatPrice(product.price)}</p>
        </li>
      ))}
    </ul>
  );
};