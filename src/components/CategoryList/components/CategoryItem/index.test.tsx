import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {
  CategoryItemContainer,
  CategoryItemShowStatusText,
  CategoryItemShowStatusColor
} from './styles';
import 'jest-styled-components';
import Component from './component';

test('renders CategoryItem as supposed', () => {
  const treeContainer = renderer.create(<CategoryItemContainer />).toJSON();
  const treeText = renderer.create(<CategoryItemShowStatusText active={false} />).toJSON();
  const treeColor = renderer.create(<CategoryItemShowStatusColor active={false} />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeColor).toMatchSnapshot();
  expect(treeText).toMatchSnapshot();
});

test('renders CategoryItem is inactive', () => {
  const treeText = renderer.create(<CategoryItemShowStatusText active={false} />).toJSON();
  const treeColor = renderer.create(<CategoryItemShowStatusColor active={false} />).toJSON();

  expect(treeColor).toHaveStyleRule('background-color', '#000000');
  expect(treeText).toHaveStyleRule('color', '#F5F6F9');
});

test('renders CategoryItem is active', () => {
  const treeText = renderer.create(<CategoryItemShowStatusText active />).toJSON();
  const treeColor = renderer.create(<CategoryItemShowStatusColor active />).toJSON();

  expect(treeColor).toHaveStyleRule('background-color', '#FEC92E');
  expect(treeText).toHaveStyleRule('color', '#FEC92E');
});

test('renders CategoryItem with strategy category', () => {
  render(
    <Component
      name="Strategy"
      description="Emerging, identifying"
      position={(1).toString().padStart(2, '0')}
    />
  );
  const nameElement = screen.getByText(/Strategy/i);
  const descriptionElement = screen.getByText(/Emerging, identifying/i);
  const positionElement = screen.getByText(/01/i);

  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(positionElement).toBeInTheDocument();
});
