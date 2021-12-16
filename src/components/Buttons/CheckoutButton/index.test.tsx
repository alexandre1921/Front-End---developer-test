import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CheckoutButton from './index';
import { ButtonStyled } from './styles';
import 'jest-styled-components';

test('renders CheckoutButton with style', () => {
  const tree = renderer.create(<ButtonStyled />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders CheckoutButton', () => {
  render(<CheckoutButton />);
  const buttonElement = screen.getByRole('button', {
    name: /checkout/i
  });

  expect(buttonElement).toBeInTheDocument();
});
