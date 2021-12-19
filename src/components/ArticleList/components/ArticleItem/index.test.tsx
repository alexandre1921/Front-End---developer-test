import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ArticleItemContainer, ArticleItemImage, ArticleItemTitle, VR } from './styles';
import 'jest-styled-components';
import Component from './component';

test('renders ArticleItem and sub components with style', () => {
  const treeContainer = renderer.create(<ArticleItemContainer />).toJSON();
  const treeImg = renderer.create(<ArticleItemImage />).toJSON();
  const treeTitle = renderer.create(<ArticleItemTitle />).toJSON();
  const treeVR = renderer.create(<VR />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeImg).toMatchSnapshot();
  expect(treeTitle).toMatchSnapshot();
  expect(treeVR).toMatchSnapshot();
});

test('renders ArticleItem with some article and author', () => {
  const props = {
    authorProps: {
      avatarURL: 'https://via.placeholder.com/150',
      currentRole: 'product designer',
      name: 'Daniel Alves'
    },
    headerImageURL: 'https://via.placeholder.com/412',
    temps: '4 minutes',
    themes: 'UX Design, Business, Sales User Research',
    title: 'What was the trend in 2020 and you didn’t use it'
  };

  render(<Component {...props} />);
  const imgElement = screen.getByAltText('article header');
  const titleElement = screen.getByText(/What was the trend in 2020 and you didn’t use it/i);

  expect(titleElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();

  // AuthorInfo
  const avatarElement = screen.getByAltText('avatar');
  const nameElement = screen.getByText(/Daniel Alves/i);
  const descriptionElement = screen.getByText(/product designer/i);
  const followElement = screen.getByText(/follow/i);

  expect(avatarElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(followElement).toBeInTheDocument();

  // MoreInfo
  const themesTitleElement = screen.getByText(/THEMES/i);
  const themesDescriptionElement = screen.getByText(/UX Design, Business, Sales User Research/i);

  expect(themesTitleElement).toBeInTheDocument();
  expect(themesDescriptionElement).toBeInTheDocument();

  const tempsTitleElement = screen.getByText(/TEMPS/i);
  const tempsDescriptionElement = screen.getByText(/4 minutes/i);

  expect(tempsTitleElement).toBeInTheDocument();
  expect(tempsDescriptionElement).toBeInTheDocument();
});
