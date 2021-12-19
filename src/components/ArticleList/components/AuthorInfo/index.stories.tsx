import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthorInfo from './component';

export default {
  title: 'Components/AuthorInfo',
  component: AuthorInfo
} as ComponentMeta<typeof AuthorInfo>;

const Template: ComponentStory<typeof AuthorInfo> = (args) => <AuthorInfo {...args} />;

export const User = Template.bind({});
User.args = {
  avatarURL: 'https://via.placeholder.com/150',
  name: 'Daniel Alves',
  currentRole: 'product designer'
};
