import { CartResumeTitle, CartResumeValueContainer } from 'components/CartResume/styles';
import HR from 'components/HR';
import styled, { css } from 'styled-components';

export const YourCartContainer = styled.div`
  width: 680px;

  > ${CartResumeTitle} {
    margin-bottom: 56px;
  }

  > ${HR} {
    margin-top: 32px;
    margin-bottom: 24px;
  }

  > ${CartResumeValueContainer} {
    width: 150px;
    float: right;
  }
`;
