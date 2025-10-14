import { useActiveTheme } from '@nx-w/hooks';
import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/nextjs';
import type { FallbackTheme } from './button-theme.types';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};
export default meta;

const fallbackTheme: FallbackTheme = { button: {} };

export const ThemedButton: StoryObj = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    showThemeName: true,
  },
  render: (args) => {
    const { theme } = useActiveTheme();
    return <Button {...args} theme={theme ?? fallbackTheme} />;
  },
};