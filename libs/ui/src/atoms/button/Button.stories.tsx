import type { Meta, StoryObj } from '@storybook/nextjs'; 
import { Button } from './button';
import { useActiveTheme } from '@nx-w/hooks';

const ButtonWithTheme = (props: React.ComponentProps<typeof Button>) => {
  const theme = useActiveTheme();
  return <Button variant='ghost' {...props} themeObj={theme.button}>Hello</Button>;
};
const meta: Meta<typeof ButtonWithTheme> = {
  title: 'Atoms/Button',
  component: ButtonWithTheme,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonWithTheme>;

export const Default: Story = {};