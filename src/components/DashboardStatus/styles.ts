import styled from 'styled-components';

export const ContainerHeader = styled.h3`
  font: normal normal 400 18px/32px Montserrat;
  color: #17181d;

  margin: 0px;
`;

export const ItemContainer = styled.div`
  background-color: #ffffff;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 16px;
  padding-bottom: 16px;

  border-radius: 16px;
`;

export const DashboardStatusContainer = styled.div`
  > ${ItemContainer}  ${ContainerHeader}
      margin-bottom: 16px;
  }

  > ${ItemContainer} + ${ItemContainer} {
    margin-top: 32px;
  }
`;
