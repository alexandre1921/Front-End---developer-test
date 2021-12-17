import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckoutButton, MainButton } from '../Buttons';

import Header from './component';

export default {
  title: 'Templates/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  src: './assets/logo.svg',
  middleButton: <CheckoutButton />,
  lastButton: <MainButton label="Sign In" />
};

export const Logout = Template.bind({});
Logout.args = {
  src: './assets/logo.svg',
  firstButton: <MainButton label="Write now" backgroundColor="#20C5D2" />,
  middleButton: <CheckoutButton />,
  lastButton: <MainButton label="Logout" />
};

export const Publish = Template.bind({});
Publish.args = {
  src: './assets/logo.svg',
  firstButton: <MainButton label="Cancel" backgroundColor="#A9A7B1" />,
  lastButton: <MainButton label="Publish" />
};
