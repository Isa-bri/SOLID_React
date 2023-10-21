type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
export const Button = ({ onClick, children }: Props) => {
  return (
    <button
      style={{
        padding: "5px 5px",
        borderRadius: "4px",
        background: "blue",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
