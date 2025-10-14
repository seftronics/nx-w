import { useActiveTheme } from '@nx-w/hooks';
import { Button, ButtonProps } from './button';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Theme } from './types';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};
export default meta;

interface ThemedButtonArgs extends ButtonProps {
  showThemeName?: boolean;
}

interface FallbackTheme extends Theme {
  button: { [key: string]: string | undefined; default?: string; destructive?: string; outline?: string; secondary?: string; ghost?: string; link?: string };
}

export const ThemedButton: StoryObj<ThemedButtonArgs> = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    showThemeName: true,
  },
  render: (args: ThemedButtonArgs) => {
    const { theme } = useActiveTheme();
    const fallbackTheme: FallbackTheme = { button: {} };
    return (
      <Button {...args} theme={theme ?? fallbackTheme} />
    );
  },
};
