'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getBooksByIdAction } from '@/store/books';
import { useDispatch } from 'react-redux';
import { useBookList, useBooksLoading } from '@/store/books';
import SelectedCategoryBook from '@/components/SelectedCategoryBook';
import { IBookDetail } from '@/app/types';
import BackPageButton from '@/components/BackPageButton';
import ReactLoading from 'react-loading';

const Category = ({ searchParams }: any) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { product } = useBookList();
  const isLoading = useBooksLoading();

  useEffect(() => {
    dispatch(getBooksByIdAction(category));
  }, [category]);

  if (isLoading) {
    return <ReactLoading type='spin' color='#009ef7' height={50} width={50} />;
  }

  return (
    <>
      <BackPageButton text={searchParams?.categoryName} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {product?.map((book: IBookDetail) => <SelectedCategoryBook book={book} category={category} key={book.id} />)}
      </div>
    </>
  );
};

export default Category;
