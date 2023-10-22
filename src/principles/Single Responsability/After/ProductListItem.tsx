import { Product } from "../../../types";
import { formatPrice } from "./utils";

type Props = {
  product: Product;
};

export const ProductListItem = ({ product }: Props) => {
  return (
    <li>
      <p>{product.name}</p>
      <p>{formatPrice(product.price)}</p>
    </li>
  );
};
