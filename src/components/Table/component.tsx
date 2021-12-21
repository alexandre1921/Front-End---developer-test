import { FC } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { TableContainer, TableHeader, TableData } from './styles';
import { Props } from './types';

const listColumns = (columns: string[], Component: FC) =>
  columns.map((column) => <Component>{column}</Component>);

const Component: FC<Props> = ({ headers, lines, isLinesDeletable = false }: Props) => {
  const linesData = lines.map((line) => (
    <tr>
      {listColumns(line, TableData)}
      <TableData isShown={isLinesDeletable}>
        <button type="button">
          <FiTrash2 />
        </button>
      </TableData>
    </tr>
  ));

  return (
    <TableContainer>
      <tr>
        {listColumns(headers, TableHeader)}
        <TableData isShown={isLinesDeletable}>&nbsp;</TableData>
      </tr>
      {linesData}
    </TableContainer>
  );
};

export default Component;
