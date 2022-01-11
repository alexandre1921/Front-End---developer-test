import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
`;

export const Body = styled.div`
  background-color: #f5f6f9;
`;

export const PageDefaultContainer = styled.div`
  max-width: 1350px;
  margin: auto;
  padding-top: 32px;
  padding-bottom: 32px;
`;
