import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  language: string;
  changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext({} as ContextProps);

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState("DE");
  const changeLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// TO DO:
// use i18next instead
