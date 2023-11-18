'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BackPageButton from '@/components/BackPageButton';
import FormButton from '@/components/FormButton';

const BookDetail = () => {
  const { slug } = useParams();
  const [BookDetail, setBookDetail] = useState();

  const getBookDetail = async () => {
    try {
      const response = await fetch(`https://assign-api.piton.com.tr/api/rest/products/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      // data.product.find((item) => item.id)
    } catch (error) {
      // console.error('POST isteği sırasında bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, []);

  return (
    <div>
      <div className=' mt-[31px]'>
        <BackPageButton text='Book Details' />
        <div className='flex'>
          <div>
            <img src='' alt='bookImg' height='570px' />
          </div>
          <div>
            <div className='flex justify-between'>
              <p className='text-[40px] font-semibold'>name</p>
              <div className='w-[44px] h-[44px] bg-input-color grid place-items-center rounded-full'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='w-6 h-6 cursor-pointer'>
                  <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z'></path>
                </svg>
              </div>
            </div>

            <p className='text-gray text-[32px]'>author</p>
            <p className='text-2xl font-bold'>summary</p>
            <p className='font-semibold text-[20px] text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo nobis dicta, sint fuga,
              harum deserunt ab odio repellendus quae sed, voluptatem dignissimos culpa. Doloribus corrupti assumenda
              nemo recusandae id?
            </p>
          </div>
        </div>
      </div>
      <FormButton bgColor='bg-button-orange' type='button' textColor='text-white'>
        Price
      </FormButton>
    </div>
  );
};

export default BookDetail;
