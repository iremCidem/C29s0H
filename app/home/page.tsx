'use client';
import MySwiper from '@/components/MySwiper';
import { useDispatch } from 'react-redux';
import { bookCategoriesAction } from '@/store/books';
import { useEffect } from 'react';
import { useBooksWithCategories } from '@/store/books';
import CategoryHeader from '@/components/CategoryHeader';
import { IBooksCategoryProps } from '@/app/types';
import BookInfoBox from '@/components/BookInfoBox';

export default function Home() {
  const data = useBooksWithCategories();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookCategoriesAction());
  }, []);
  return (
    <div className='container '>
      <MySwiper />
      <div className=''>
        {data.map((item: any) => (
          <div key={item.id} className=''>
            <CategoryHeader data={item.category}></CategoryHeader>
            {item.products.map((product: IBooksCategoryProps) => (
              <div key={product.id} className=''>
                <BookInfoBox book={product} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
