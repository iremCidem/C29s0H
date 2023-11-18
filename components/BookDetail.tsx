import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
const BookDetail = () => {
  const { id } = useParams();

  return <div className='container'>BookDetail</div>;
};

export default BookDetail;
