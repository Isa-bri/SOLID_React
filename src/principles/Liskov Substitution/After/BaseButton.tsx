import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const BaseButton = (props: Props) => {
  return (
    <button
      {...props}
      style={{
        ...props.style,
        padding: "5px 5px",
        borderRadius: "4px",
      }}
    />
  );
};
