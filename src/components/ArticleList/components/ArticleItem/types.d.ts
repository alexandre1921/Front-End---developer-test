import { Props as AuthorProps } from '../AuthorInfo/types';

export interface Props {
  /**
   * Article's main image
   */
  headerImageURL: string;
  /**
   * Article's title
   */
  title: string;
  /**
   * Themes that are related to the article
   */
  themes: string;
  /**
   * How many time you need to read this article
   */
  temps: string;
  /**
   * Author info such as avatar url, name and role
   */
  authorProps: AuthorProps;
}
