import React, { useEffect, useState } from 'react';
import { IBookDetail } from '@/app/types';
import Link from 'next/link';
import { ENVIRONMENT } from '@/config';

interface CategoryBookProps {
  book: IBookDetail;
  category: any;
}

const SelectedCategoryBook = ({ book, category }: CategoryBookProps) => {
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
    <Link href={`/home/${category}/${book.slug}`}>
      <div className=' h-[433px] bg-input-color p-5 rounded flex flex-col justify-between '>
        <img src={imageUrl} alt='bookImg' className='h-[300px] mx-auto bt-[20px] ' />
        <div className='flex justify-between items-end '>
          <div>
            <p className='text-[20px] font-semibold'>{book.name}</p>
            <p className='text-[16px] font-semibold text-gray'>{book.author}</p>
          </div>
          <div>
            <p className='text-[24px] font-bold text-purple'>${book.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SelectedCategoryBook;
