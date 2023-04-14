import React, { useRef, forwardRef } from "react";
import { Input } from "../components/Input";

export const PhoneNumberComp = forwardRef((props, primaryRef) => {
  const secondaryRef = useRef(null);

  return (
    <section>
      <h1>Contact Info</h1>
      <div className="field">
        <label htmlFor="primaryPhone">Primary Contact</label>
        <Input id="primaryPhone" ref={primaryRef} />
      </div>

      <div className="field">
        <label htmlFor="secondaryPhone">Secondary Contact</label>
        <Input id="secondaryPhone" ref={secondaryRef} />
      </div>
    </section>
  );
});
