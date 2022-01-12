import { createContext, FC, useContext, useMemo } from 'react';
import useLogic from './logic';

import { CategoryProviderProps, CategoryContextData } from './types';

const CategoryContext = createContext<CategoryContextData>({} as CategoryContextData);

const CategoryProvider: FC<CategoryProviderProps> = ({ children }: CategoryProviderProps) => {
  const { categories, setCategories } = useLogic();

  const contextValue = useMemo(
    () => ({
      categories,
      setCategories
    }),
    [categories]
  );

  return <CategoryContext.Provider value={contextValue}>{children}</CategoryContext.Provider>;
};

function useCategory(): CategoryContextData {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within an CategoryProvider');
  }

  return context;
}

export { CategoryProvider, useCategory };
