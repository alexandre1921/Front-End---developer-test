import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AuthorInfoContainer, AuthorInfoRole, AuthorInfoName, AuthorInfoAvatar } from './styles';
import 'jest-styled-components';
import Component from './component';

test('renders CategoryItem as supposed', () => {
  const treeContainer = renderer.create(<AuthorInfoContainer />).toJSON();
  const treeRole = renderer.create(<AuthorInfoRole />).toJSON();
  const treeName = renderer.create(<AuthorInfoName />).toJSON();
  const treeAvatar = renderer.create(<AuthorInfoAvatar />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeRole).toMatchSnapshot();
  expect(treeName).toMatchSnapshot();
  expect(treeAvatar).toMatchSnapshot();
});

test('renders CategoryItem with themes item', () => {
  render(
    <Component
      avatarURL="https://via.placeholder.com/150"
      name="Daniel Alves"
      currentRole="product designer"
    />
  );

  const avatarElement = screen.getByAltText('avatar');
  const nameElement = screen.getByText(/Daniel Alves/i);
  const descriptionElement = screen.getByText(/product designer/i);
  const followElement = screen.getByText(/follow/i);

  expect(avatarElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(followElement).toBeInTheDocument();
});
