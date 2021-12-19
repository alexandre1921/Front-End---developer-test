import { Props as CategoryItemProps } from './components/CategoryItem/types';

interface CategoryItemPropsWithId extends Omit<CategoryItemProps, 'position'> {
  id: string;
}

export interface Props {
  categories: Array<CategoryItemPropsWithId>;
}
