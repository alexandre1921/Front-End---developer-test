import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoreInfo from './component';

export default {
  title: 'Components/MoreInfo',
  component: MoreInfo
} as ComponentMeta<typeof MoreInfo>;

const Template: ComponentStory<typeof MoreInfo> = (args) => <MoreInfo {...args} />;

export const Themes = Template.bind({});
Themes.args = {
  title: 'THEMES',
  description: 'UX Design, Business, Sales User Research'
};
