'use client';
import MySwiper from '@/components/MySwiper';
import { useDispatch } from 'react-redux';
import { bookCategoriesAction } from '@/store/books';
import { useEffect } from 'react';
import { useBooksWithCategories } from '@/store/books';
import CategoryHeader from '@/components/CategoryHeader';
import BookInfoBox from '@/components/BookInfoBox';

export default function Home() {
  const data = useBooksWithCategories();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookCategoriesAction());
  }, []);

  return (
    <div>
      <MySwiper />
      <div className=''>
        {data.map((item: any) => (
          <div key={item.id} className=''>
            <CategoryHeader data={item.category}></CategoryHeader>
            <div className='flex flex-wrap -mx-4'>
              {item.products.map((product: any) => (
                <div key={product.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 mb-4'>
                  <BookInfoBox book={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
