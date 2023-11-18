'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getBooksByIdAction } from '@/store/books';
import { useDispatch } from 'react-redux';
import { useBookList } from '@/store/books';

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { product } = useBookList();
  console.log(product);

  useEffect(() => {
    dispatch(getBooksByIdAction(category));
  }, [category]);

  return (
    <div>
      {/* {product?.map((book) => {
        <h1>{book.name}</h1>;
      })} */}
    </div>
  );
};

export default Category;
