import type { Meta, StoryObj } from '@storybook/nextjs';
import { Breadcrumb } from './breadcrumb';
import { useBreadcrumb } from '@nx-w/hooks';


const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<{ pathname: string }>;

const BreadcrumbWithHook = (args: { pathname: string }) => {
  const items = useBreadcrumb(args.pathname);
  return <Breadcrumb items={items} />;
};

export const WithHook: Story = {
  render: (args: { pathname: string }) => <BreadcrumbWithHook {...args} />,
  args: {
    pathname: '/manajemen/langganan/detail',
  },
  argTypes: {
    pathname: { control: 'text' },
  },
};