'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getBooksByIdAction } from '@/store/books';
import { useDispatch } from 'react-redux';
import { useBookList } from '@/store/books';
import SelectedCategoryBook from '@/components/SelectedCategoryBook';
import { IBookDetail } from '@/app/types';
import BackPageButton from '@/components/BackPageButton';
import { useRouter } from 'next/router';
import { useBooksWithCategories } from '@/store/books';
import { bookCategoriesAction } from '@/store/books';

const Category = () => {
  const { category } = useParams();
  const data = useBooksWithCategories();
  const dispatch = useDispatch();
  const { product } = useBookList();

  useEffect(() => {
    dispatch(bookCategoriesAction());
  }, []);

  useEffect(() => {
    dispatch(getBooksByIdAction(category));
  }, [category]);

  const pageTitle = data.find((item: any) => item.category.id == category)?.category.name;

  return (
    <>
      <BackPageButton text={pageTitle} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {product?.map((book: IBookDetail) => <SelectedCategoryBook book={book} category={category} key={book.id} />)}
      </div>
    </>
  );
};

export default Category;
