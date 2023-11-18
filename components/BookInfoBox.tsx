import React, { useEffect, useState } from 'react';
import { IBookDetail } from '@/app/types';
interface BookInfoBoxProps {
  book: IBookDetail;
}

const BookInfoBox = ({ book }: BookInfoBoxProps) => {
  const [imageUrl, setImageUrl] = useState();
  const postData = async () => {
    try {
      const response = await fetch('https://assign-api.piton.com.tr/api/rest/cover_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Diğer gerektiğinde headerları ekleyebilirsiniz.
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
    postData();
  }, []);

  return (
    <div className='bg-input-color flex w-[320px] h-[200px] rounded p-2.5'>
      <img src={imageUrl} alt='book.cover' className='h-[180px]' />
      <div className=' '>
        <p className='text-[20px] font-semibold pt-2.5'>{book.name}</p>
        <p className='text-[16px] font-semibold'>{book.author}</p>
        <p className='text-[24px] font-bold text-purple'>${book.price}</p>
      </div>
    </div>
  );
};

export default BookInfoBox;
