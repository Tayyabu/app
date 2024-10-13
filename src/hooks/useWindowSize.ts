"use client";

import { useEffect, useState } from "react";
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: w, innerHeight: h } = window;
    return {
      w,
      h,
    };
  }
  return {
    w: 60,
    h: 60,
  };
}
export const useWindowSize = () => {
  const [size, setSize] = useState<{ w: number; h: number }>(
    getWindowDimensions()
  );

  const handler = () => {
    setSize(getWindowDimensions());
  };
  useEffect(
    function () {
      if (typeof window !== undefined) {
        window.addEventListener("resize", handler);

        return () => window.removeEventListener("resize", handler);
      }
    },
    [size]
  );

  return size;
};
