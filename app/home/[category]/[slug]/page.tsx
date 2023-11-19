'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BackPageButton from '@/components/BackPageButton';
import FormButton from '@/components/FormButton';
import { ENVIRONMENT } from '@/config';
import { useDispatch } from 'react-redux';
import { useBooksLoading } from '@/store/books';
import { useSelectedBook } from '@/store/books';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { getBookDetailAction, setBooksFavoriteAction } from '@/store/books';

const BookDetail = () => {
  const dispatch = useDispatch();
  const { category, slug } = useParams();
  const isLoading = useBooksLoading();
  const [imageUrl, setImageUrl] = useState();
  const selectedBook = useSelectedBook();

  const postImageData = async () => {
    try {
      const response = await fetch(ENVIRONMENT.API_URL + '/cover_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: selectedBook?.cover,
        }),
      });

      const data = await response.json();
      setImageUrl(data.action_product_image.url);
    } catch (error) {
      console.error('POST isteği sırasında bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    if (category && slug) {
      dispatch(getBookDetailAction({ category, slug }));
    }
  }, [category, slug]);

  useEffect(() => {
    if (selectedBook?.cover) {
      postImageData();
    }
  }, [selectedBook?.cover]);

  function addToFavorite() {
    dispatch(setBooksFavoriteAction(selectedBook.isFavorite));
  }

  if (isLoading) {
    return <ReactLoading type='spin' color='#009ef7' height={50} width={50} />;
  }

  return (
    <div>
      <div>
        <BackPageButton text='Book Details' />
        <div className='flexResponsive'>
          <div className='me-[80px] bg-input-color rounded'>
            <img src={imageUrl} alt='bookImg' className='min-h-[300px] min-w-[450px] p-[60px] ' />
          </div>
          <div>
            <div className='flex justify-between'>
              <p className='text-[40px] font-semibold'>{selectedBook?.name}</p>
              <div
                className='w-[44px] h-[44px] bg-input-color grid place-items-center rounded-full cursor-pointer'
                onClick={addToFavorite}
              >
                {selectedBook?.isFavorite ? (
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-6 h-6'>
                    <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='#F4F4FF'
                    stroke='black'
                    strokeWidth='2'
                    className='w-6 h-6'
                  >
                    <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
                  </svg>
                )}
              </div>
            </div>

            <p className='text-gray text-[32px] mb-[60px]'>{selectedBook?.author}</p>
            <p className='text-2xl font-bold mb-[10px]'>Summary</p>
            <p className='font-semibold text-[20px] text-gray mb-[188px]'>{selectedBook?.description}</p>
          </div>
        </div>
      </div>
      <div className='float-right mb-[40px]'>
        <FormButton bgColor='bg-button-orange' type='button' textColor='text-white' navigate={false}>
          <div
            className='flex justify-around'
            onClick={() => {
              toast.success('Added to cart!');
            }}
          >
            <span> $ {selectedBook?.price} </span>
            <span>Buy Now</span>
          </div>
        </FormButton>
      </div>
    </div>
  );
};

export default BookDetail;
