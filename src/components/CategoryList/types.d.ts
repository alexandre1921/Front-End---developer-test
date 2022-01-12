import { ICategory } from 'models/category';

interface CategoryItemProps extends ICategory {
  active: boolean;
}

export interface Props {
  categories: Array<CategoryItemProps>;
  handleOnClickCategory?(id?: string): void;
}
