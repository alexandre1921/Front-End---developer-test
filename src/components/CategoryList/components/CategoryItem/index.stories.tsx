import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryItem from './component';

export default {
  title: 'Components/CategoryItem',
  component: CategoryItem
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => <CategoryItem {...args} />;

export const Inactive = Template.bind({});
Inactive.args = {
  description: 'Emerging, identifying',
  name: 'Strategy',
  position: (1).toString().padStart(2, '0')
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  description: 'Research, Design and Validation',
  name: 'Design',
  position: (2).toString().padStart(2, '0')
};
