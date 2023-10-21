import { ButtonHTMLAttributes } from "react";
import { BaseButton } from "./BaseButton";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const DangerButton = (props: Props) => {
  return (
    <BaseButton
      {...props}
      style={{
        ...props.style,
        backgroundColor: "red",
      }}
    />
  );
};
