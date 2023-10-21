import { BaseButton } from "./BaseButton";
import { DangerButton } from "./DangerButton";

export const ClickMeWithBaseButton = () => {
  return (
    <BaseButton onClick={() => alert("Botão clicado")}>Clique aqui!</BaseButton>
  );
};

export const ClickMeWithDangerButton = () => {
  return (
    <DangerButton onClick={() => alert("Botão clicado")}>
      Clique aqui!
    </DangerButton>
  );
};
