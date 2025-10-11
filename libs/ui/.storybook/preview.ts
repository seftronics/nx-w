import { Preview } from '@storybook/react-vite';
import type { ReactRenderer } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/globals.css'; 

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',      
        dark: 'dark',   
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;