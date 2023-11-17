import { ReactNode, createContext, useState } from 'react';
import { Theme } from '../types';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

interface Props {
  children?: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  return (
    <ThemeContext.Provider value={ { theme, setTheme } }>
      { children }
    </ThemeContext.Provider>
  )
};