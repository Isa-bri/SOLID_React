import { BaseButton } from "./BaseButton";

type Props = {
  onClick: () => void;
};
export const DeleteButton = ({ onClick }: Props) => {
  return <BaseButton onClick={onClick}>Deletar</BaseButton>;
};
