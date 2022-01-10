import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ThemeSelector from './component';
import { ThemeSelectorContainer } from './styles';
import 'jest-styled-components';

test('renders ThemeSelector with style', () => {
  const treeContainer = renderer.create(<ThemeSelectorContainer />).toJSON();

  expect(treeContainer).toMatchSnapshot();
});

test('renders ThemeSelector', () => {
  const props = {
    themes: [
      { name: 'UX Design' },
      { name: 'Business' },
      { name: 'Sales' },
      { name: 'User Research' }
    ]
  };

  render(<ThemeSelector {...props} />);

  const headerElement = screen.getByText(/Themes/i);

  expect(headerElement).toBeInTheDocument();
});
