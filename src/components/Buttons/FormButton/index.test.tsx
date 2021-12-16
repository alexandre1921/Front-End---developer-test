import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FormButton from './index';
import { ButtonStyled } from './styles';
import 'jest-styled-components';

test('renders FormButton with style', () => {
  const tree = renderer.create(<ButtonStyled />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders Sign In button', () => {
  render(<FormButton label="Sign In" />);
  const buttonElement = screen.getByText(/Sign In/i);

  expect(buttonElement).toBeInTheDocument();
});
