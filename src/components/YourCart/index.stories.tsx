import { ComponentStory, ComponentMeta } from '@storybook/react';

import YourCart from './component';

export default {
  title: 'Templates/YourCart',
  component: YourCart
} as ComponentMeta<typeof YourCart>;

const Template: ComponentStory<typeof YourCart> = (args) => <YourCart {...args} />;

export const Items = Template.bind({});
Items.args = {
  subtotal: 'R$ 29,80',
  tableProps: {
    headers: ['Article', 'Author', 'Publisher', 'Value'],
    lines: [
      [
        'What was the trend in 2020 and you didn’t use it',
        'Daniel Alves',
        'Tog.design',
        'R$ 10,90'
      ],
      ['Where can you apply design in your life?', 'Daniel Alves', 'Tog.design', 'R$ 18,90']
    ],
    isLinesDeletable: true
  }
};
