import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { async } from '@firebase/util';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const startFetch = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const failFetch = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL);

export const fetchCategoriesAsync = ()=>async(dispatch)=>{

  dispatch(startFetch());
  try {
    const categories = await getCategoriesAndDocuments();
    await dispatch(setCategories(categories))
    
  } catch (error) {
    await dispatch(failFetch(error))
  }
  
}
