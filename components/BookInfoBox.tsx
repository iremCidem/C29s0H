import React, { useEffect, useState } from 'react';
import { IBookDetail, IBooksCategory } from '@/app/types';
import { ENVIRONMENT } from '@/config';
import Link from 'next/link';

interface BookInfoBoxProps {
  book: IBookDetail;
  category: IBooksCategory;
}

const BookInfoBox = ({ book, category }: BookInfoBoxProps) => {
  const [imageUrl, setImageUrl] = useState();

  const postImageData = async () => {
    try {
      const response = await fetch(ENVIRONMENT.API_URL + '/cover_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: book.cover,
        }),
      });

      const data = await response.json();

      setImageUrl(data.action_product_image.url);
    } catch (error) {
      console.error('POST isteği sırasında bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    postImageData();
  }, []);

  return (
    <Link href={`/home/${category?.id}/${book.slug}`} className='bg-input-color flex h-[200px] rounded p-2.5'>
      <img src={imageUrl} alt='book.cover' className='h-[180px]' />
      <div className=' '>
        <p className='text-[20px] font-semibold pt-2.5'>{book.name}</p>
        <p className='text-[16px] font-semibold text-gray'>{book.author}</p>
        <p className='text-[24px] font-bold text-purple'>${book.price}</p>
      </div>
    </Link>
  );
};

export default BookInfoBox;
