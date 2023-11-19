'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const BackPageButton = ({ text }: any) => {
  const router = useRouter();
  return (
    <div className='flex items-center cursor-pointer mb-[31px]' onClick={() => router.back()}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
      </svg>
      <span className='text-2xl font-bold'>{text}</span>
    </div>
  );
};

export default BackPageButton;
