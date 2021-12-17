import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { HeaderContainer } from './styles';
import 'jest-styled-components';
import Component from './component';
import { CheckoutButton, MainButton } from '../Buttons';

test('renders Header styled components', () => {
  const tree = renderer.create(<HeaderContainer />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('renders header for unlogged users', () => {
  const src = './assets/logo.svg';
  const middleButton = <CheckoutButton />;
  const lastButton = <MainButton label="Sign In" />;

  render(<Component src={src} middleButton={middleButton} lastButton={lastButton} />);
  const logoElement = screen.getByAltText('logo');
  const checkoutButtonElement = screen.getByRole('button', {
    name: /checkout/i
  });
  const signInButtonElement = screen.getByText(/Sign In/i);

  expect(logoElement).toBeInTheDocument();
  expect(checkoutButtonElement).toBeInTheDocument();
  expect(signInButtonElement).toBeInTheDocument();
});

test('renders header for logged users', () => {
  const src = './assets/logo.svg';
  const firstButton = <MainButton label="Write now" backgroundColor="#20C5D2" />;
  const middleButton = <CheckoutButton />;
  const lastButton = <MainButton label="Logout" />;

  render(
    <Component
      src={src}
      firstButton={firstButton}
      middleButton={middleButton}
      lastButton={lastButton}
    />
  );

  const logoElement = screen.getByAltText('logo');
  const writeNowButtonElement = screen.getByText(/Write now/i);
  const checkoutButtonElement = screen.getByRole('button', {
    name: /checkout/i
  });
  const logoutButtonElement = screen.getByText(/Logout/i);

  expect(logoElement).toBeInTheDocument();
  expect(writeNowButtonElement).toBeInTheDocument();
  expect(checkoutButtonElement).toBeInTheDocument();
  expect(logoutButtonElement).toBeInTheDocument();
});

test('renders header for writing', () => {
  const src = './assets/logo.svg';
  const firstButton = <MainButton label="Cancel" backgroundColor="#A9A7B1" />;
  const lastButton = <MainButton label="Publish" />;

  render(<Component src={src} firstButton={firstButton} lastButton={lastButton} />);

  const logoElement = screen.getByAltText('logo');
  const writeNowButtonElement = screen.getByText(/Cancel/i);
  const logoutButtonElement = screen.getByText(/Publish/i);

  expect(logoElement).toBeInTheDocument();
  expect(writeNowButtonElement).toBeInTheDocument();
  expect(logoutButtonElement).toBeInTheDocument();
});
