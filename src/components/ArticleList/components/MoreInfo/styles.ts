import styled from 'styled-components';

export const MoreInfoTitle = styled.h5`
  color: #000000;
  opacity: 0.5;
  font-size: 7px;
  font-family: Helvetica;
  font-weight: normal;
  text-transform: capitalize;
`;

export const MoreInfoDescription = styled.h4`
  color: #000000;
  font-size: 10px;
  font-family: Helvetica;
  font-weight: medium;
  text-transform: uppercase;
`;

export const CategoryItemContainer = styled.div`
  > ${MoreInfoTitle} {
    margin: 0;
  }

  > ${MoreInfoDescription} {
    margin: 0;
  }

  > ${MoreInfoDescription} + ${MoreInfoTitle} {
    margin-top: 2px;
  }
`;
