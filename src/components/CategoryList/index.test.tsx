import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { CategoryListContainer } from './styles';
import 'jest-styled-components';
import Component from './component';

test('renders CategoryListContainer with style', () => {
  const treeContainer = renderer.create(<CategoryListContainer />).toJSON();

  expect(treeContainer).toMatchSnapshot();
});

test('renders CategoryList with 3 categories', () => {
  const categories = [
    {
      id: 'iS7T3F2y8lxKMdWuLERq',
      name: 'Strategy',
      active: false,
      description: 'Emerging, identifying'
    },
    {
      id: 'nPgx0skxh1Vl8pLy80XN',
      name: 'Design',
      active: true,
      description: 'Research, Design and Validation'
    },
    {
      id: 'X4xOpBugmwe6ZlWadGom',
      name: 'Development',
      active: false,
      description: 'From ideation to a product'
    }
  ];

  render(<Component categories={categories} />);

  const nameElement01 = screen.getAllByText(/Strategy|Design|Development/i);
  const descriptionElement01 = screen.getAllByText(
    /Emerging, identifying|Research, Design and Validation|From ideation to a product/i
  );
  const positionElement01 = screen.getAllByText(/01|02|03/i);

  nameElement01.forEach((element) => expect(element).toBeInTheDocument());
  descriptionElement01.forEach((element) => expect(element).toBeInTheDocument());
  positionElement01.forEach((element) => expect(element).toBeInTheDocument());
});
