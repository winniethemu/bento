import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Example/ProgressBar',
  tags: ['autodocs'],
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const NoProgress: Story = {
  args: {
    value: 0,
  },
};

export const FiveProgress: Story = {
  name: '5% Progress',
  args: {
    value: 5,
  },
};

export const HalfProgress: Story = {
  args: {
    value: 50,
  },
};

export const FullProgress: Story = {
  args: {
    value: 100,
  },
};
