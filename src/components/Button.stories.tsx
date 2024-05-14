import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      options: ['Primary Button', 'Normal Button'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: 'Normal Button',
    primary: false,
  },
};
