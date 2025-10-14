import { useContext } from 'react';
import { ThemeContext } from '@nx-w/providers';

export function useActiveTheme() {
  const theme = useContext(ThemeContext);
  return {
    theme,
    setTheme: () => {
      throw new Error('setTheme is not implemented. Use ThemeProvider to change theme.');
    },
  };
}
