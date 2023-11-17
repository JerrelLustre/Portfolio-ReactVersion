import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ route, label, anchor }) {
  const baseClasses = 'btn inline-block py-3 px-6 bg-white text-black text-xl font-oswald';

  if (anchor) {
    // Render an anchor element
    return (
      <a href={route} className={`${baseClasses}`}>
        {label}
      </a>
    );
  } else {
    // Render a Link element
    return <Link to={route} className={`${baseClasses}`}>{label}</Link>;
  }
}
