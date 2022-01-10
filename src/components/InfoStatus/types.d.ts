import { IconType } from 'react-icons';

interface ButtonProps {
  /**
   * Name from pack of icons
   */
  icon: IconType;
  /**
   * Redirect to correct page
   */
  onClick?(): void;
}

interface StatusProps {
  /**
   * Descriptive name about this status
   */
  name: string;
  /**
   * Quantity has been reached until now
   */
  value: number;
}

export interface Props {
  /**
   * Chart's data
   */
  mainIcon: IconType;
  /**
   * Chart's data
   */
  title: string;
  /**
   * Chart's data
   */
  firstButton: ButtonProps;
  /**
   * Chart's data
   */
  secondButton: ButtonProps;
  /**
   * Chart's data
   */
  status: Array<StatusProps>;
}
