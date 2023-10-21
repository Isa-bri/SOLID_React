import { BaseButton } from "../../Open Closed/After/BaseButton";
import { ButtonWithIcon } from "../../Open Closed/After/ButtonWithIcon";

export const ClickMeWithBaseButtonRight = () => {
  return (
    <BaseButton onClick={() => alert("Botão clicado")}>Clique aqui!</BaseButton>
  );
};

export const ClickMeWithBaseButtonWrong = () => {
  return (
    <BaseButton
      onClick={() => alert("Botão clicado")}
      icon="➡️"
      text="Clique aqui!"
    />
  );
};

export const ClickMeWithButtonWithIconRight = () => {
  return (
    <ButtonWithIcon
      onClick={() => alert("Botão clicado")}
      icon="➡️"
      text="Clique aqui!"
    />
  );
};

export const ClickMeWithButtonWithIconWrong = () => {
  return (
    <ButtonWithIcon onClick={() => alert("Botão clicado")}>
      Clique aqui!
    </ButtonWithIcon>
  );
};
