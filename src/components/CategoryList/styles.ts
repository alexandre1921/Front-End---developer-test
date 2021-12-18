import styled from 'styled-components';
import { CategoryItemContainer } from '../CategoryItem/styles';

export const CategoryListContainer = styled.div`
  > ${CategoryItemContainer}:not(${CategoryItemContainer}:last-of-type) {
    margin-bottom: 50px;
  }
`;
