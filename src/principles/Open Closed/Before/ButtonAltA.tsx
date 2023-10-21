type Props = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: Props) => {
  return (
    <button
      style={{
        padding: "5px 5px",
        borderRadius: "4px",
        background: "blue",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
