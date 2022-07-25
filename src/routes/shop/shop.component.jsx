import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesAsync, setCategories } from '../../store/categories/category.action';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndDocuments('categories');
    //   dispatch(setCategories(categoriesArray));
    // };

    // getCategoriesMap();
    dispatch(fetchCategoriesAsync())
  }, []);

  return (

    <Routes>
      
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
