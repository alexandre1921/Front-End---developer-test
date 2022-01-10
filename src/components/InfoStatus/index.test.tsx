import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FiBook, FiEdit } from 'react-icons/fi';
import { MdInsights } from 'react-icons/md';
import InfoStatus from './component';
import {
  InfoStatusContainer,
  BodyContainer,
  HeaderContainer,
  Status,
  StatusContainer
} from './styles';
import 'jest-styled-components';

test('renders InfoStatus with style', () => {
  const treeContainer = renderer.create(<InfoStatusContainer />).toJSON();
  const treeBodyContainer = renderer.create(<BodyContainer />).toJSON();
  const treeHeaderContainer = renderer.create(<HeaderContainer />).toJSON();
  const treeStatus = renderer.create(<Status />).toJSON();
  const treeStatusContainer = renderer.create(<StatusContainer />).toJSON();

  expect(treeContainer).toMatchSnapshot();
  expect(treeBodyContainer).toMatchSnapshot();
  expect(treeHeaderContainer).toMatchSnapshot();
  expect(treeStatus).toMatchSnapshot();
  expect(treeStatusContainer).toMatchSnapshot();
});

const firstStatus = [
  {
    name: 'Published articles',
    value: 15
  },
  {
    name: 'Sales of articles',
    value: 300
  },
  {
    name: 'Read articles',
    value: 10
  },
  {
    name: 'Purchased articles',
    value: 300
  },
  {
    name: 'Citations received',
    value: 300
  }
];

test('renders InfoStatus', () => {
  const props = {
    mainIcon: MdInsights,
    title: 'Dashboard',
    firstButton: {
      icon: FiBook
    },
    secondButton: {
      icon: FiEdit
    },
    status: firstStatus
  };

  render(<InfoStatus {...props} />);

  const headerElement = screen.getByText(/Dashboard/i);
  const firstStatusHeaderElement = screen.getByText(/Published articles/i);
  const firstStatusValueElement = screen.getByText(/15/i);
  const firstButtonElement = screen.getByRole('button', {
    name: /checkout/i
  });
  const secondButtonElement = screen.getByRole('button', {
    name: /checkout/i
  });

  expect(headerElement).toBeInTheDocument();
  expect(firstStatusHeaderElement).toBeInTheDocument();
  expect(firstStatusValueElement).toBeInTheDocument();
  expect(firstButtonElement).toBeInTheDocument();
  expect(secondButtonElement).toBeInTheDocument();
});
