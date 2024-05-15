import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  argTypes: {
    initialCount: {
      options: [0, 10, 20, 30],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialCount: 0,
  },
};
