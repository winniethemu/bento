import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Example/Carousel',
  tags: ['autodocs'],
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  args: {
    images: [],
    height: 400,
    width: 600,
  },
};
