import { formatPrice } from "../../Single Responsability/After/utils";

type Props = {
  name: string;
  price: number;
};

export const ProductListItem = ({ name, price }: Props) => {
  return (
    <li>
      <p>{name}</p>
      <p>{formatPrice(price)}</p>
    </li>
  );
};
