import { Product, ProductAlt } from "../../../types";
import { ProductListItem } from "./ProductListItem";

type Props = {
  products: Product[] | ProductAlt[];
};

export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map((product) => {
        if ("name" in product) {
          return (
            <ProductListItem
              key={product.id}
              name={product.name}
              price={product.price}
            />
          );
        } else {
          return (
            <ProductListItem
              key={product.id}
              name={product.title}
              price={product.price}
            />
          );
        }
      })}
    </ul>
  );
};
