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
      {/* <div
        className={`px-[200px] ${darkOrLight ? "bg-slate-900" : "bg-white"} ${
          darkOrLight ? "red" : "red"
        } text-red-400 flex flex-col `}
      >
        {children}
      </div> */}

      {/* <div className="px-[200px] bg-black">{children}</div> */}

      <div className="px-[200px] !text-blue-800">{children}</div>
    </ThemeContext.Provider>
  );
};
