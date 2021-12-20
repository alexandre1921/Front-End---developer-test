import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartResume from './component';

export default {
  title: 'Templates/CartResume',
  component: CartResume
} as ComponentMeta<typeof CartResume>;

const Template: ComponentStory<typeof CartResume> = (args) => <CartResume {...args} />;

export const NoDiscount = Template.bind({});
NoDiscount.args = {
  subTotal: 'R$ 29,80',
  total: 'R$ 29,80'
};

export const Discount = Template.bind({});
Discount.args = {
  discount: 'R$ 2,98',
  subTotal: 'R$ 29,80',
  total: 'R$ 26,82'
};
