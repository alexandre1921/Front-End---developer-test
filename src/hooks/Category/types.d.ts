import React from 'react';

import { ICategory } from 'models/category';

export interface ICategoryState extends ICategory {
  active: boolean;
}

export interface CategoryContextData {
  categories: Array<ICategoryState>;
  setCategories: Dispatch<SetStateAction<ICategoryState[]>>;
}

export interface CategoryProviderProps {
  children: React.ReactNode;
}

export interface IUseLogicReturn {
  categories: Array<ICategoryState>;
  setCategories: Dispatch<SetStateAction<ICategoryState[]>>;
}
