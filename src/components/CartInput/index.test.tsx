import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CartInput from './component';
import { InputStyled, InputContainer, InputPlaceholder } from './styles';
import 'jest-styled-components';

test('renders CartInput with style', () => {
  const treeInput = renderer.create(<InputStyled />).toJSON();
  const treeContainer = renderer.create(<InputContainer />).toJSON();
  const treePlaceholder = renderer.create(<InputPlaceholder isShown={false} />).toJSON();

  expect(treeInput).toMatchSnapshot();
  expect(treeContainer).toMatchSnapshot();
  expect(treePlaceholder).toMatchSnapshot();
});

test('renders CartInput with placeholder shown', () => {
  const treePlaceholder = renderer.create(<InputPlaceholder isShown />).toJSON();

  expect(treePlaceholder).toHaveStyleRule('display', undefined);
});

test('renders CartInput with placeholder hidden', () => {
  const treePlaceholder = renderer.create(<InputPlaceholder isShown={false} />).toJSON();

  expect(treePlaceholder).toHaveStyleRule('display', 'none');
});

test('renders CartInput', () => {
  render(
    <CartInput
      placeholder="Discount coupon"
      isHeaderPlaceholderShown={false}
      handleOnChangeInput={() => {
        ('');
      }}
    />
  );

  const buttonElement = screen.getByPlaceholderText(/Discount coupon/i);
  expect(buttonElement).toBeInTheDocument();
});
