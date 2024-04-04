import { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent: any) => {
  return (props: any) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
      const handleMousePositionChange = (e: any) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }: any) => {
  return (
    <div>
      <p> Mouse position:</p>
      <div>
        <span> x: {mousePosition.x}</span>
        <span> y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }: any) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      {mousePosition.x}
      <p>{mousePosition.y}</p>
    </p>
  );
};
