type Props = {
  onChange: (filter: string) => void;
};

const ProductFilter = ({ onChange }: Props) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filtrar produtos"
    />
  );
};

export default ProductFilter;
