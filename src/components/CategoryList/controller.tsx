import { useCategory } from 'hooks/Category';
import { ICategoryState } from 'hooks/Category/types';
import { FC } from 'react';
import { Props } from './types';

const useController = (Component: FC<Props>) => {
  const { categories, setCategories } = useCategory();

  const handleOnClickCategory = (id?: string) => {
    setCategories((oldCategory: ICategoryState[]) =>
      oldCategory.map((categoryState) =>
        categoryState.id === id
          ? { ...categoryState, active: true }
          : { ...categoryState, active: false }
      )
    );
  };

  return <Component categories={categories} handleOnClickCategory={handleOnClickCategory} />;
};

export default useController;
