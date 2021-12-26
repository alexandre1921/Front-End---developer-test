import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart from './component';

export default {
  title: 'Components/Chart',
  component: Chart
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const LastSevenDays = Template.bind({});
LastSevenDays.args = {
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
};
