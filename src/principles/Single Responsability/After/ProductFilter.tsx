type Props = {
  onChange: (filter: string) => void;
};

export const ProductFilter = ({ onChange }: Props) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filtrar produtos"
    />
  );
};