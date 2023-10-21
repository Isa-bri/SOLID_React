type Props = {
  onClick: () => void;
  text: string;
  icon?: string;
};

export const Button = ({ onClick, text, icon }: Props) => {
  return (
    <button
      style={{
        padding: "5px 5px",
        borderRadius: "4px",
        background: "blue",
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
