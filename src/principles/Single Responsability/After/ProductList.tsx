import { Product } from "../../../types";
import { formatPrice } from "./utils";

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <p>{formatPrice(product.price)}</p>
        </li>
      ))}
    </ul>
  );
};