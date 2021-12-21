import { ComponentStory, ComponentMeta } from '@storybook/react';

import CartResume from './component';

export default {
  title: 'Components/Table',
  component: CartResume
} as ComponentMeta<typeof CartResume>;

const Template: ComponentStory<typeof CartResume> = (args) => <CartResume {...args} />;

export const NoTrash = Template.bind({});
NoTrash.args = {
  headers: ['Article', 'Author', 'Publisher', 'Value'],
  lines: [
    ['What was the trend in 2020 and you didn’t use it', 'Daniel Alves', 'Tog.design', 'R$ 10,90'],
    ['Where can you apply design in your life?', 'Daniel Alves', 'Tog.design', 'R$ 18,90']
  ]
};

export const WithTrash = Template.bind({});
WithTrash.args = {
  headers: ['Article', 'Author', 'Publisher', 'Value'],
  lines: [
    ['What was the trend in 2020 and you didn’t use it', 'Daniel Alves', 'Tog.design', 'R$ 10,90'],
    ['Where can you apply design in your life?', 'Daniel Alves', 'Tog.design', 'R$ 18,90']
  ],
  isLinesDeletable: true
};
