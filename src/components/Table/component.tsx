import { FC } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { TableContainer, TableHeader, TableData } from './styles';
import { Props } from './types';

const listColumns = (columns: string[], Component: FC) =>
  columns.map((column) => <Component>{column}</Component>);

const listData = (lines: string[][], isLinesDeletable: boolean) =>
  lines.map((line) => (
    <tr>
      {listColumns(line, TableData)}
      <TableData className="trash" isShown={isLinesDeletable}>
        <button type="button">
          <FiTrash2 />
        </button>
      </TableData>
    </tr>
  ));

const Component: FC<Props> = ({ headers, lines, isLinesDeletable = false }: Props) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {listColumns(headers, TableHeader)}
          <TableData className="trash" isShown={isLinesDeletable}>
            &nbsp;
          </TableData>
        </tr>
      </thead>
      <tbody>{listData(lines, isLinesDeletable)}</tbody>
    </TableContainer>
  );
};

export default Component;
