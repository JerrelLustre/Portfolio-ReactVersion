import React from "react";
import './Container.css'

export default function Container({ children, fluid, className }) {
  const containerClass = fluid ? "container-fluid" : "customContainer";

  return (
    <div className={`${containerClass} border-box-border mx-auto px-4${className ? ' ' + className : ""}`}>
      {children}
    </div>
  );
}
