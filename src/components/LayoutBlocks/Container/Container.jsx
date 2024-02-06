
import "./Container.css";



export default function Container({ children, fluid, className}) {
   
  
    // Full-width container or regular width
  const containerClass = fluid ? "container-fluid" : "customContainer";

  return (
    <div
      className={`${containerClass} box-border mx-auto px-4 md:px-10 lg:px-24 2xl:px-52${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
}
