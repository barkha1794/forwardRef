import React, { forwardRef } from "react";

const x = ({ ...props }, ref) => {
  return <input type="text" ref={ref} {...props} />;
};

export const Input = forwardRef(x);
