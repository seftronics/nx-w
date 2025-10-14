/* eslint-disable @nx/enforce-module-boundaries */
import { useContext } from 'react';
import { ThemeContext } from '@nx-w/providers';
import { THEMES } from '@nx-w/config-ui';

export function useActiveTheme() {
  const themeName = useContext(ThemeContext) ?? 'zikas';
  const themeObj = typeof themeName === 'string' ? THEMES[themeName] ?? 'defaultTheme' : themeName ?? 'defaultTheme';
  return themeObj;
}