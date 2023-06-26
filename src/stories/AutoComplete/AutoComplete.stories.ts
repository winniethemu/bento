import type { Meta, StoryObj } from '@storybook/react';

import { AutoComplete } from './AutoComplete';
import { Option } from './type';

const meta = {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  tags: ['data-entry'],
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: Option[] = [
  { label: 'Alberta', value: 'AB' },
  { label: 'British Columbia', value: 'BC' },
  { label: 'Manitoba', value: 'MB' },
  { label: 'New Brunswick', value: 'NB' },
  { label: 'Newfoundland and Labrador', value: 'NL' },
  { label: 'Northwest Territories', value: 'NT' },
  { label: 'Nova Scotia', value: 'NS' },
  { label: 'Nunavut', value: 'NU' },
  { label: 'Ontario', value: 'ON' },
  { label: 'Prince Edward Island', value: 'PE' },
  { label: 'Quebec', value: 'QC' },
  { label: 'Saskatchewan', value: 'SK' },
  { label: 'Yukon', value: 'YT' },
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
