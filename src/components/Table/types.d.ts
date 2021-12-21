export interface Props {
  /**
   * Header columns
   */
  headers: Array<string>;
  /**
   * Lines with all columns data
   */
  lines: Array<Array<string>>;
  /**
   * Can the delete button be shown?
   */
  isLinesDeletable?: boolean;
}
