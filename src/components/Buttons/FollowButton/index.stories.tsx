import { ComponentStory, ComponentMeta } from '@storybook/react';

import FollowButton from './index';

export default {
  title: 'Components/Buttons/FollowButton',
  component: FollowButton
} as ComponentMeta<typeof FollowButton>;

const Template: ComponentStory<typeof FollowButton> = (args) => <FollowButton {...args} />;

export const Design = Template.bind({});
Design.args = {
  label: 'Follow'
};
