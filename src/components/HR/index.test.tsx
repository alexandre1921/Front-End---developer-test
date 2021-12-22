import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import HR from './index';
import 'jest-styled-components';

test('renders CartInput with style', () => {
  const treeHR = renderer.create(<HR />).toJSON();

  expect(treeHR).toMatchSnapshot();
});
