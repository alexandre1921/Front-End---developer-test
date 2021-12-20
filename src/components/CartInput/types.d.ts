export interface ExternalProps {
  /**
   * If empty show this text instead
   */
  placeholder: string;
  /**
   * Initial value for input
   */
  defaultValue?: string;
}

export interface Props extends ExternalProps {
  /**
   * Show title if placeholder is hidden
   */
  isHeaderPlaceholderShown: boolean;
  /**
   * Update input value state
   */
  handleOnChangeInput(e: ChangeEvent<HTMLInputElement>): ChangeEvent<HTMLInputElement>;
}
