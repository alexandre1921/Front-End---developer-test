export interface Props {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Button text content
   */
  label: string;
  /**
   * Is outlined?
   */
  outline?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
