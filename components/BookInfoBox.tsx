import React from 'react';
import { IBookDetailProps } from '@/app/types';

const BookInfoBox = ({ book }: IBookDetailProps) => {
  console.log(book);
  return (
    <div className='bg-input-color '>
      <img src='ddsd' alt='book.cover' />
      <h4>{book.name}</h4>
      <h5>{book.author}</h5>
      <p>{book.price}</p>
    </div>
  );
};

export default BookInfoBox;
