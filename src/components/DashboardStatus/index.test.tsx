import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import DashboardStatus from './component';
import { DashboardStatusContainer, ContainerHeader, ItemContainer } from './styles';
import 'jest-styled-components';

test('renders DashboardStatus with style', () => {
  const treeContainer = renderer.create(<DashboardStatusContainer />).toJSON();
  const treeHeader = renderer.create(<ContainerHeader />).toJSON();
  const treeItem = renderer.create(<ItemContainer />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeHeader).toMatchSnapshot();
  expect(treeItem).toMatchSnapshot();
});

test('renders DashboardStatus', () => {
  const props = {
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

  render(<DashboardStatus {...props} />);

  const chartHeaderElement = screen.getByText(/Your sales for the last 7 days/i);
  const tableHeaderElement = screen.getByText(/Your bestsellers/i);

  expect(chartHeaderElement).toBeInTheDocument();
  expect(tableHeaderElement).toBeInTheDocument();
});
