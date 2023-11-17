import React from "react";

export default function Row({ children, className }) {
  return (
    <div className={`row w-full flex flex-wrap${className ? ' ' + className : ""}`}>
      {children}
    </div>
  );
}
