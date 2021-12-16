import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import MainButton from './index';
import { ButtonStyled } from './styles';
import 'jest-styled-components';

test('renders MainButton with style', () => {
  const tree = renderer.create(<ButtonStyled backgroundColor="#6356a5" />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#6356a5');
});

test('renders Sign In button', () => {
  render(<MainButton label="Sign In" />);
  const buttonElement = screen.getByText(/Sign In/i);

  expect(buttonElement).toBeInTheDocument();
});
