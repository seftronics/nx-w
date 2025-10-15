/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @nx/enforce-module-boundaries */
import { Preview } from '@storybook/react-vite';

import '../src/globals.css';
import type { StoryFn } from '@storybook/react';

import { ThemeProvider } from '@nx-w/providers';
import { THEMES } from '@nx-w/config-ui';

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
  }
};


const preview: Preview = {
  decorators: [withThemeManager],
};

export default preview;