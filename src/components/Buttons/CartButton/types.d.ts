import { PropsBase } from '../types';

export interface Props extends PropsBase {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Is outlined?
   */
  outline?: boolean;
}
