import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CategoryItemContainer, MoreInfoTitle, MoreInfoDescription } from './styles';
import 'jest-styled-components';
import Component from './component';

test('renders CategoryItem as supposed', () => {
  const treeContainer = renderer.create(<CategoryItemContainer />).toJSON();
  const treeTitle = renderer.create(<MoreInfoTitle />).toJSON();
  const treeDescription = renderer.create(<MoreInfoDescription />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeTitle).toMatchSnapshot();
  expect(treeDescription).toMatchSnapshot();
});

test('renders CategoryItem with themes item', () => {
  render(<Component title="THEMES" description="UX Design, Business, Sales User Research" />);
  const titleElement = screen.getByText(/THEMES/i);
  const descriptionElement = screen.getByText(/UX Design, Business, Sales User Research/i);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
