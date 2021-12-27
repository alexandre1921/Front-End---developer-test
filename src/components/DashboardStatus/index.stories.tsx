import { ComponentStory, ComponentMeta } from '@storybook/react';

import DashboardStatus from './component';

export default {
  title: 'Templates/DashboardStatus',
  component: DashboardStatus
} as ComponentMeta<typeof DashboardStatus>;

const Template: ComponentStory<typeof DashboardStatus> = (args) => <DashboardStatus {...args} />;

export const Main = Template.bind({});
Main.args = {
  chartProps: {
    data: [
      {
        name: '02/04',
        sales: 100
      },
      {
        name: '03/04',
        sales: 200
      },
      {
        name: '04/04',
        sales: 500
      },
      {
        name: '05/04',
        sales: 400
      },
      {
        name: '06/04',
        sales: 200
      },
      {
        name: '07/04',
        sales: 300
      }
    ]
  },
  tableProps: {
    headers: ['Article', 'Publisher', 'Sales', 'Value'],
    lines: [
      ['What was the trend in 2020 and you didn’t use it', 'Tog.design', '200', 'R$ 10,90'],
      ['Where can you apply design in your life?', 'Tog.design', '100', 'R$ 18,90']
    ]
  }
};
