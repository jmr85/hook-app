import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mousemove = (e) => {
      const coordinates = { x: e.x, y: e.y };
      setCoords(coordinates);
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <h1>Eres genial!</h1>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};
