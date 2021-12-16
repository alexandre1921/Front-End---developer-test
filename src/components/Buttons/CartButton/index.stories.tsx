import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartButton from './index';

export default {
  title: 'Buttons/CartButton',
  component: CartButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CartButton>;

const Template: ComponentStory<typeof CartButton> = (args) => <CartButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkout',
  color: '#FEC92E'
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Keep buying',
  color: '#292C35',
  outline: true
};
