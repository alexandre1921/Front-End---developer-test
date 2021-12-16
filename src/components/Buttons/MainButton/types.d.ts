export interface Props {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button text content
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
