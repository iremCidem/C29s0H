import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
const BookDetail = ({ params }: any) => {
  const { id } = useParams();
  console.log(params);

  return <div className='container'>BookDetail</div>;
};

export default BookDetail;
