import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import FollowButton from './index';
import { ButtonStyled } from './styles';
import 'jest-styled-components';

test('renders FollowButton with style', () => {
  const tree = renderer.create(<ButtonStyled backgroundColor="#fec92e" />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', '#fec92e');
});

test('renders follow button button', () => {
  render(<FollowButton label="Follow" />);
  const buttonElement = screen.getByText(/Follow/i);

  expect(buttonElement).toBeInTheDocument();
});
