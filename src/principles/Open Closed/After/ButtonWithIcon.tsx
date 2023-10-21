import { Button } from "./Button";

type Props = {
  onClick: () => void;
  text: string;
  icon: string;
};
export const ButtonWithIcon = ({ onClick, text, icon }: Props) => {
  return (
    <Button onClick={onClick}>
      {icon}
      {text}
    </Button>
  );
};
