import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
