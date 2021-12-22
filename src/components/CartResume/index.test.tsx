import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CartInput from './component';
import {
  CartResumeContainer,
  CartResumeTitle,
  CartResumeTotal,
  CartResumeValueContainer
} from './styles';
import 'jest-styled-components';

test('renders CartInput with style', () => {
  const treeContainer = renderer.create(<CartResumeContainer />).toJSON();
  const treeTitle = renderer.create(<CartResumeTitle />).toJSON();
  const treeTotal = renderer.create(<CartResumeTotal />).toJSON();
  const treeValue = renderer.create(<CartResumeValueContainer isShown={false} />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeTitle).toMatchSnapshot();
  expect(treeTotal).toMatchSnapshot();
  expect(treeValue).toMatchSnapshot();
});

test('renders CartInput with style', () => {
  const treeValue = renderer.create(<CartResumeValueContainer isShown={false} />).toJSON();

  expect(treeValue).toHaveStyleRule('display', 'none');
});

test('renders CartInput with style', () => {
  const treeValue = renderer.create(<CartResumeValueContainer isShown />).toJSON();

  expect(treeValue).toHaveStyleRule('display', 'flex');
});

test('renders CartInput', () => {
  const props = {
    discount: 'R$ 2,98',
    subtotal: 'R$ 29,80',
    total: 'R$ 26,82'
  };
  render(<CartInput {...props} />);

  const titleElement = screen.getByText(/Resume/i);
  const inputElement = screen.getByPlaceholderText(/Discount coupon/i);
  const subtotalElement = screen.getByText(/Subtotal/i);
  const discountElement = screen.getByText(/Discount\s/);
  const totalElement = screen.getByText(/Total/);
  const checkoutElement = screen.getByText(/CHECKOUT/i);
  const keepBuyingElement = screen.getByText(/KEEP BUYING/i);

  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(subtotalElement).toBeInTheDocument();
  expect(discountElement).toBeInTheDocument();
  expect(totalElement).toBeInTheDocument();
  expect(checkoutElement).toBeInTheDocument();
  expect(keepBuyingElement).toBeInTheDocument();
});
