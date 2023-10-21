type Props = {
  onClick: () => void;
};
export const Button = ({ onClick }: Props) => {
  return (
    <button
      style={{
        padding: "5px 5px",
        borderRadius: "4px",
        background: "blue",
      }}
      onClick={onClick}
    >
      Adicionar ao carrinho
    </button>
  );
};
