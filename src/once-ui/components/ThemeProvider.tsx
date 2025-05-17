'use client';

import { createContext, useContext } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: 'light';
  resolvedTheme: 'light';
  setTheme: (theme: 'light') => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'light',
  resolvedTheme: 'light',
  setTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const value: ThemeProviderState = {
    theme: 'light',
    resolvedTheme: 'light',
    setTheme: () => {}, // noop
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
