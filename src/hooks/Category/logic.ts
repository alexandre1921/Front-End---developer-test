import { useEffect, useState } from 'react';
import CategoryModel from 'models/category';
import CategoryRepository from 'repositories/category';
import { ICategoryState, IUseLogicReturn } from './types';

const getCategories = () => {
  const categoryRepository = new CategoryRepository();
  return categoryRepository.getAllCategories();
};

function useLogic(): IUseLogicReturn {
  const [categories, setCategories] = useState<Array<ICategoryState>>([]);

  useEffect(() => {
    const setAllCategories = async () => {
      const newCategories = await getCategories();

      const categoryMapper = (category: CategoryModel) => {
        return {
          active: false,
          ...category.toJSON()
        };
      };

      const mappedCategories = newCategories.map(categoryMapper);
      mappedCategories[0].active = true;

      setCategories(mappedCategories);
    };

    setAllCategories();
  }, []);

  return { categories, setCategories };
}

export default useLogic;
