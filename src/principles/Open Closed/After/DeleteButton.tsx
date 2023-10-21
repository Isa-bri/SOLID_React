import { Button } from "./Button";

type Props = {
  onClick: () => void;
};
export const DeleteButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>Deletar</Button>;
};
