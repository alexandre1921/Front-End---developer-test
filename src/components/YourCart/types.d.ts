import { Props as TableProps } from 'components/Table/types';

export interface Props {
  /**
   * Subtotal from all cart items
   */
  subtotal: string;
  /**
   * All the properties needed to create a table
   */
  tableProps: TableProps;
}
