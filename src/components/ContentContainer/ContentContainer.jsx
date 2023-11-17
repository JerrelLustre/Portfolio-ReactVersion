import React from 'react'

export default function ContentContainer({ className, children }) {
    return (
      <div className={`overflow-hidden p-4 border-white border-2 text-robcon text-white text-lg rounded-tr-lg${className ? ' ' + className : ""}`}>
        {children}
      </div>
    );
  }
  
