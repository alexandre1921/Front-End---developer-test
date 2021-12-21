import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Table from './component';
import { TableContainer, TableData, TableHeader } from './styles';
import 'jest-styled-components';

test('renders Table with style', () => {
  const treeContainer = renderer.create(<TableContainer />).toJSON();
  const treeHeader = renderer.create(<TableHeader />).toJSON();
  const treeData = renderer.create(<TableData isShown={false} />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeHeader).toMatchSnapshot();
  expect(treeData).toMatchSnapshot();
});

test('renders TableData hidden', () => {
  const treeData = renderer.create(<TableData isShown={false} />).toJSON();

  expect(treeData).toHaveStyleRule('display', 'none');
});

test('renders TableData showing content', () => {
  const treeData = renderer.create(<TableData isShown />).toJSON();

  expect(treeData).toHaveStyleRule('display', undefined);
});

test('renders Table', () => {
  const props = {
    headers: ['Article', 'Author', 'Publisher', 'Value'],
    lines: [['Where can you apply design in your life?', 'Daniel Alves', 'Tog.design', 'R$ 18,90']]
  };
  render(<Table {...props} />);
  const articleHeaderElement = screen.getByText(/Article/i);
  const authorHeaderElement = screen.getByText(/Author/i);
  const publisherHeaderElement = screen.getByText(/Publisher/i);
  const valueHeaderElement = screen.getByText(/Value/i);

  const articleSecondLineElement = screen.getByText(/Where can you apply design in your life?/i);
  const authorSecondLineElement = screen.getByText(/Daniel Alves/i);
  const publisherSecondLineElement = screen.getByText(/Tog.design/i);
  const valueSecondLineElement = screen.getByText(/R\$ 18,90/);

  expect(articleHeaderElement).toBeInTheDocument();
  expect(authorHeaderElement).toBeInTheDocument();
  expect(publisherHeaderElement).toBeInTheDocument();
  expect(valueHeaderElement).toBeInTheDocument();
  expect(articleSecondLineElement).toBeInTheDocument();
  expect(authorSecondLineElement).toBeInTheDocument();
  expect(publisherSecondLineElement).toBeInTheDocument();
  expect(valueSecondLineElement).toBeInTheDocument();
});
