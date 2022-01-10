import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FiBook, FiEdit } from 'react-icons/fi';
import { MdInsights } from 'react-icons/md';

import InfoStatus from './component';

export default {
  title: 'Components/InfoStatus',
  component: InfoStatus
} as ComponentMeta<typeof InfoStatus>;

const Template: ComponentStory<typeof InfoStatus> = (args) => <InfoStatus {...args} />;

const firstStatus = [
  {
    name: 'Published articles',
    value: 15
  },
  {
    name: 'Sales of articles',
    value: 300
  },
  {
    name: 'Read articles',
    value: 10
  },
  {
    name: 'Purchased articles',
    value: 300
  },
  {
    name: 'Citations received',
    value: 300
  }
];

const secondStatus = [
  {
    name: 'Strategy',
    value: 2
  },
  {
    name: 'Design',
    value: 10
  },
  {
    name: 'Development',
    value: 8
  },
  {
    name: 'Social',
    value: 6
  },
  {
    name: 'Business',
    value: 30
  }
];

export const Main = Template.bind({});
Main.args = {
  mainIcon: MdInsights,
  title: 'Dashboard',
  firstButton: {
    icon: FiBook
  },
  secondButton: {
    icon: FiEdit
  },
  status: firstStatus
};

export const Purchased = Template.bind({});
Purchased.args = {
  mainIcon: FiBook,
  title: 'Purchased articles',
  firstButton: {
    icon: MdInsights
  },
  secondButton: {
    icon: FiEdit
  },
  status: secondStatus
};

export const Articles = Template.bind({});
Articles.args = {
  mainIcon: FiEdit,
  title: 'Articles you wrote',
  firstButton: {
    icon: MdInsights
  },
  secondButton: {
    icon: FiBook
  },
  status: secondStatus
};
