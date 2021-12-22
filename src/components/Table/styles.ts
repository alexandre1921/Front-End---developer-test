import styled, { css } from 'styled-components';

interface TableColumnProps {
  isShown?: boolean;
}

export const TableHeader = styled.th<TableColumnProps>`
  text-align: left;
  font: normal normal 600 14px/21px Montserrat;
  letter-spacing: 0px;
  color: #17181d;

  ${(props) =>
    props.isShown === false &&
    css`
      display: none;
    `}
`;

export const TableData = styled.td<TableColumnProps>`
  text-align: left;
  font: normal normal 500 14px/21px Montserrat;
  letter-spacing: 0px;
  color: #17181d;

  > button {
    border: none;
    background: none;
    cursor: pointer;
  }

  ${(props) =>
    props.isShown === false &&
    css`
      display: none;
    `}
`;

export const TableContainer = styled.table`
  > tr {
    > th {
    }
    > td {
      max-width: 210px;

      &:not(.trash) {
        padding-right: 50px;
      }
    }
  }
`;
