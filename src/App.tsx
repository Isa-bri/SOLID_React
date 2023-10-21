import { ClickMeWithBaseButton, ClickMeWithDangerButton } from "./principles/Liskov Substitution/After/ClickMe";
function App() {

  return <>
    <ClickMeWithBaseButton />
    <ClickMeWithDangerButton />
  </>;
}

export default App;
