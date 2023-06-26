import type { Meta, StoryObj } from '@storybook/react';

import { AutoComplete } from './AutoComplete';

const meta = {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  tags: ['data-entry'],
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: string[] = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

export const Basic: Story = {
  args: {
    options,
  },
};

export const CategorizedLookUp: Story = {
  args: {
    options,
  },
};

export const StatusFeedback: Story = {
  args: {
    options,
    status: 'error',
  },
};
