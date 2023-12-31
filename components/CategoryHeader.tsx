import React from 'react';
import Link from 'next/link';
import { IBooksCategory } from '@/app/types';

interface categoryHeaderProps {
  data: IBooksCategory;
}

const CategoryHeader = ({ data }: categoryHeaderProps) => {
  return (
    <div className='flex justify-between mb-5'>
      <p className='font-bold text-[32px]'>{data?.name}</p>
      <Link
        href={`/home/${data?.id}?categoryName=${data?.name}`}
        className='font-bold text-xl text-orange grid place-items-center'
      >
        View All
      </Link>
    </div>
  );
};

export default CategoryHeader;
