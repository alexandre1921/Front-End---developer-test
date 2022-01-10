import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  > .icon-container {
    background-color: #fec92e;
    border-radius: 2px;
    align-items: center;
    height: 24px;
  }

  > h3 {
    text-align: left;
    font: normal normal 500 12px/32px Montserrat;
    letter-spacing: 0px;
    color: #17181d;
  }

  > button {
    height: 24px;
    align-items: center;
    border: none;
    background-color: #ffffff;
    padding: 4px;
    border-radius: 2px;
  }
`;

export const BodyContainer = styled.div``;

export const StatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Status = styled.div`
  h5 {
    margin: 0px;
    text-align: left;
    font: normal normal 600 10px/12px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.5;
  }

  p {
    margin: 0px;
    text-align: left;
    font: normal normal 600 18px/23px Montserrat;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

export const InfoStatusContainer = styled.div`
  background: #ecedf3;
  border-radius: 24px;
  padding: 64px;

  > ${HeaderContainer} {
    > .icon-container svg {
      padding: 4px;
    }

    > h3 {
      margin: 0px;
      flex: 1;
      margin-left: 8px;
    }

    > button + button {
      margin-left: 32px;
    }
  }

  > ${HeaderContainer} + ${BodyContainer} {
    margin-top: 40px;

    > ${StatusContainer} ${Status} + ${Status} {
      margin-left: 48px;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`;
