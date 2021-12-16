import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainButton from './index';

export default {
  title: 'Buttons/MainButton',
  component: MainButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MainButton>;

const Template: ComponentStory<typeof MainButton> = (args) => <MainButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sign In'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Write now',
  backgroundColor: '#20C5D2'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Cancel',
  backgroundColor: '#A9A7B1'
};
