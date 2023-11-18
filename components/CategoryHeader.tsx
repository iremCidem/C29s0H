'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const CategoryHeader = ({ data }: any) => {
  const router = useRouter();
  return (
    <div className='flex justify-between mb-5'>
      <p className='font-bold text-[32px]'>{data.name}</p>
      <button className='font-bold text-xl text-orange' onClick={() => router.push(`/home/${data.id}`)}>
        View All
      </button>
    </div>
  );
};

export default CategoryHeader;
