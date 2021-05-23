import { createContext, useState } from "react";

// STAN: Do I have to do this?
// interface ContextProps {
//   state: "purple";
//   dispatch: ({ type }: { type: string }) => void;
// }

// const ThemeContext = createContext({} as ContextProps)

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
