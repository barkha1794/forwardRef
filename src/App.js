import { HeaderComponent } from "./appComponents/HeaderComponent";
import { PhoneNumberComp } from "./appComponents/PhoneNumberComp";
import "./styles.css";
import { useRef } from "react";

export default function App() {
  const primaryRef = useRef(null);

  return (
    <div className="App">
      <HeaderComponent primaryRef={primaryRef} />
      <PhoneNumberComp ref={primaryRef} />
    </div>
  );
}
