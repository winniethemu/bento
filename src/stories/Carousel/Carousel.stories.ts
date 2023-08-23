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
    images: [
      {
        src: '/xmas.webp',
        alt: 'Some Christmas knolling',
      },
      {
        src: '/eclipse.webp',
        alt: 'Eclipse in a bottle',
      },
      {
        src: '/airfryer.webp',
        alt: 'Air fryer',
      },
      {
        src: '/laundry.webp',
        alt: 'Laundry',
      },
      {
        src: '/sf.webp',
        alt: 'San Francisco street',
      },
    ],
    height: 400,
    width: 600,
  },
};
