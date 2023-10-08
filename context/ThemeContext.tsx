"use client";

import { createContext, useState } from "react";

interface ThemeContextType {
  darkOrLight: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkOrLight: false,
  toggle() {},
});

export const ThemeProvider = ({ children }: any) => {
  const [darkOrLight, setDarkOrLight] = useState(false);
  const toggle = () => {
    setDarkOrLight(!darkOrLight);
  };

  return (
    <ThemeContext.Provider value={{ toggle, darkOrLight }}>
      <div className="px-[100px]">{children}</div>
    </ThemeContext.Provider>
  );
};
