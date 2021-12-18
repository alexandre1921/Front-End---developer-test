import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoryList from './component';

export default {
  title: 'Templates/CategoryList',
  component: CategoryList
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList {...args} />;

export const All = Template.bind({});
All.args = {
  categories: [
    {
      id: 'iS7T3F2y8lxKMdWuLERq',
      name: 'Strategy',
      active: false,
      description: 'Emerging, identifying'
    },
    {
      id: 'nPgx0skxh1Vl8pLy80XN',
      name: 'Design',
      active: true,
      description: 'Research, Design and Validation'
    },
    {
      id: 'X4xOpBugmwe6ZlWadGom',
      name: 'Development',
      active: false,
      description: 'From ideation to a product'
    }
  ]
};
