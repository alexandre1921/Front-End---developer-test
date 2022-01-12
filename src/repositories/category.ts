import AppError from 'errors/app-error';
import CategoryModel, { ICategory } from 'models/category';
import { db } from 'utils/firebase/firestore';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  CollectionReference
} from 'firebase/firestore';

class CategoryRepository {
  public static readonly collection = 'categories';

  public async getAllCategories(): Promise<Array<CategoryModel>> {
    try {
      const collectionRef: CollectionReference<ICategory> = collection(
        db,
        CategoryRepository.collection
      );

      const queryResult = await getDocs(collectionRef).catch(() =>
        Promise.reject(new AppError('Query exception when getting categories'))
      );

      if (queryResult.empty) {
        return [];
      }

      const buildCategoryModels = (doc: QueryDocumentSnapshot<ICategory>) =>
        new CategoryModel({ id: doc.id, ...doc.data() });

      return queryResult.docs.map(buildCategoryModels);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default CategoryRepository;
