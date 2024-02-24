import { createContext } from 'react';

import { Theme } from '../types/types';

interface IThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextType>({} as IThemeContextType);
