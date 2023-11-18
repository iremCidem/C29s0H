import React from 'react';
import Link from 'next/link';
const CategoryHeader = ({ data }: any) => {
  return (
    <div className='flex justify-between mb-5'>
      <p className='font-bold text-[32px]'>{data.name}</p>
      <Link href={`/home/${data.id}`} className='font-bold text-xl text-orange'>
        View All
      </Link>
    </div>
  );
};

export default CategoryHeader;
