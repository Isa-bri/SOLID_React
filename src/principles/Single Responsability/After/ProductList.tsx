import { Product } from "../../../types";
import { ProductListItem } from "./ProductListItem";

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};