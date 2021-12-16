import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CartButton from './index';
import { ButtonStyled } from './styles';
import 'jest-styled-components';

test('renders CartButton with style', () => {
  const tree = renderer.create(<ButtonStyled color="#FEC92E" />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#292c35');
  expect(tree).toHaveStyleRule('color', '#FEC92E');
});

test('renders CartButton with transparent style', () => {
  const tree = renderer.create(<ButtonStyled outline color="#292C35" />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('color', '#292C35');
});

test('renders MainButton with checkout label', () => {
  render(<CartButton label="Checkout" />);
  const buttonElement = screen.getByText(/Checkout/i);

  expect(buttonElement).toBeInTheDocument();
});
