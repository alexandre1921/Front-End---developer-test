import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckoutButton from './index';

export default {
  title: 'Components/Buttons/CheckoutButton',
  component: CheckoutButton
} as ComponentMeta<typeof CheckoutButton>;

const Template: ComponentStory<typeof CheckoutButton> = (args) => <CheckoutButton {...args} />;

export const Primary = Template.bind({});
