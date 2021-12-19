import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleItem from './component';

export default {
  title: 'Components/ArticleItem',
  component: ArticleItem
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />;

export const FirstArticle = Template.bind({});
FirstArticle.args = {
  authorProps: {
    avatarURL: 'https://via.placeholder.com/150',
    currentRole: 'product designer',
    name: 'Daniel Alves'
  },
  headerImageURL: 'https://via.placeholder.com/412',
  temps: '4 minutes',
  themes: 'UX Design, Business, Sales User Research',
  title: 'What was the trend in 2020 and you didn’t use it'
};
