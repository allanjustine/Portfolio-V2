"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";

export const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return children;
};
