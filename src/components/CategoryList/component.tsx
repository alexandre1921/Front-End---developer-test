import { FC } from 'react';
import CategoryItem from './components/CategoryItem/component';
import { CategoryListContainer } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ categories, handleOnClickCategory }: Props) => {
  return (
    <CategoryListContainer>
      {categories.map((category, index) =>
        category.description && category.name ? (
          <CategoryItem
            key={category.id}
            position={(index + 1).toString().padStart(2, '0')}
            description={category.description}
            name={category.name}
            active={category.active}
            onClick={() => handleOnClickCategory?.(category.id)}
          />
        ) : null
      )}
    </CategoryListContainer>
  );
};

export default Component;
