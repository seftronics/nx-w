// import { useActiveTheme } from '@nx-w/hooks';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Preview } from '@storybook/react-vite';

import '../src/globals.css';
import type { StoryFn } from '@storybook/react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ThemeProvider } from '@nx-w/providers';
import { THEMES } from '@nx-w/themes';

type ThemeName = 'javamas' | 'zikas';
type ThemeMode = 'light' | 'dark';

function getThemeName(theme: unknown): ThemeName {
  if (theme === 'javamas' || theme === 'zikas') return theme as ThemeName;
  return 'zikas'; // fallback
}

const withThemeManager = (Story: StoryFn, context: { args: Record<string, unknown>; globals: { theme?: string; mode?: ThemeMode } }) => {
  const themeName = getThemeName(context.globals.theme);
  const themeObj = THEMES[themeName];
  return (
    <ThemeProvider value={themeObj}>
        {/* @ts-expect-error */}
        {Story(context.args, context)}
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'zikas',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'zikas', title: 'Zikas' },
        { value: 'javamas', title: 'Javamas' },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    description: 'Light or dark mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
  },
};


const preview: Preview = {
  decorators: [withThemeManager],
};

export default preview;