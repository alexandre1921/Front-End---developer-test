import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemeSelector from './component';

export default {
  title: 'Components/ThemeSelector',
  component: ThemeSelector
} as ComponentMeta<typeof ThemeSelector>;

const Template: ComponentStory<typeof ThemeSelector> = (args) => <ThemeSelector {...args} />;

export const Main = Template.bind({});
Main.args = {
  themes: [
    { name: 'UX Design' },
    { name: 'Business' },
    { name: 'Sales' },
    { name: 'User Research' }
  ]
};
