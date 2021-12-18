import { FC } from 'react';
import CategoryItem from '../CategoryItem/component';
import { CategoryListContainer } from './styles';
import { Props } from './types';

const Component: FC<Props> = ({ categories }: Props) => {
  return (
    <CategoryListContainer>
      {categories.map((category, index) => (
        <CategoryItem
          key={category.id}
          position={index.toString().padStart(2, '0')}
          {...category}
        />
      ))}
    </CategoryListContainer>
  );
};

export default Component;
