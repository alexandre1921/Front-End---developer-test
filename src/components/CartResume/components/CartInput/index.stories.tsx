import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartInput from './index';

export default {
  title: 'Components/CartInput',
  component: CartInput
} as ComponentMeta<typeof CartInput>;

const Template: ComponentStory<typeof CartInput> = (args) => <CartInput {...args} />;

export const Discount = Template.bind({});
Discount.args = {
  placeholder: 'Discount coupon',
  defaultValue: 'reading10'
};

export const None = Template.bind({});
None.args = {
  placeholder: 'Discount coupon',
  defaultValue: ''
};
