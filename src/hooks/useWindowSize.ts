import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ w: number; h: number }>({
    h: window.innerHeight,
    w: window.innerWidth,
  });

  const handler = () => {
    setSize({
      h: window.innerHeight,
      w: window.innerWidth,
    });
  };
  useEffect(
    function () {
      window.addEventListener("resize", handler);

      return () => window.removeEventListener("resize", handler);
    },
    [size]
  );

  return size;
};
