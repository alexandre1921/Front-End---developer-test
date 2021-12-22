import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import YourCart from './component';
import { YourCartContainer } from './styles';
import 'jest-styled-components';

test('renders CartInput with style', () => {
  const treeContainer = renderer.create(<YourCartContainer />).toJSON();

  expect(treeContainer).toMatchSnapshot();
});

test('renders YourCart', () => {
  const props = {
    subtotal: 'R$ 29,80',
    tableProps: {
      headers: ['Article', 'Author', 'Publisher', 'Value'],
      lines: [
        [
          'What was the trend in 2020 and you didn’t use it',
          'Daniel Alves',
          'Tog.design',
          'R$ 10,90'
        ],
        ['Where can you apply design in your life?', 'Daniel Alves', 'Tog.design', 'R$ 18,90']
      ],
      isLinesDeletable: true
    }
  };
  render(<YourCart {...props} />);
  const titleElement = screen.getByText(/Your cart/i);
  const subtotalElement = screen.getByText(/Subtotal/i);
  const subtotalValueElement = screen.getByText(/R\$ 29,80/);

  expect(titleElement).toBeInTheDocument();
  expect(subtotalElement).toBeInTheDocument();
  expect(subtotalValueElement).toBeInTheDocument();
});
