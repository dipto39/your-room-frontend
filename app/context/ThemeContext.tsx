"use client"
import { createContext, useState } from "react";

const ThemeContext = createContext(null)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  // check in local storage
  const storedTheme = localStorage.getItem('theme');
  const [mode, setMode] = useState(storedTheme || 'light');
  return ( 
    <ThemeContext.Provider value={{ mode, setMode } as any}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider }