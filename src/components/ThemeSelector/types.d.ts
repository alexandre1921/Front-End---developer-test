interface ThemeProps {
  /**
   * Theme's name
   */
  name: string;
  /**
   * Action to remove theme from list
   */
  handleOnClickDeleteTheme?(): void;
}

export interface Props {
  /**
   * List of selected themes
   */
  themes: Array<ThemeProps>;
}
