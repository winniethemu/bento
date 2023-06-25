import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Example/Switch',
  tags: ['data-entry'],
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    label: 'Default',
  },
};
