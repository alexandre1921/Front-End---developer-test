import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormButton from './index';

export default {
  title: 'Buttons/FormButton',
  component: FormButton
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = (args) => <FormButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Sign in'
};
