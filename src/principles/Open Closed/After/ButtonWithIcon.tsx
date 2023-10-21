import { BaseButton } from "./BaseButton";

type Props = {
  onClick: () => void;
  text: string;
  icon: string;
};
export const ButtonWithIcon = ({ onClick, text, icon }: Props) => {
  return (
    <BaseButton onClick={onClick}>
      {icon}
      {text}
    </BaseButton>
  );
};
