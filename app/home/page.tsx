'use client';
import MySwiper from '@/components/MySwiper';
import { useDispatch } from 'react-redux';
import { getBookCategoriesAction } from '@/store/books';
import { useEffect } from 'react';
import { useBooksWithCategories } from '@/store/books';
import CategoryHeader from '@/components/CategoryHeader';
import BookInfoBox from '@/components/BookInfoBox';

export default function Home() {
  const data: IBooksWithCategories[] = useBooksWithCategories();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookCategoriesAction());
  }, []);

  return (
    <div>
      <MySwiper />
      <div className=''>
        {data?.map((item) => (
          <div key={item.id} className=''>
            <CategoryHeader data={item.category} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              {item.products.map((product) => (
                <BookInfoBox book={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
