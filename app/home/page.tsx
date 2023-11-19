'use client';
import MySwiper from '@/components/MySwiper';
import { useDispatch } from 'react-redux';
import { getBookCategoriesAction } from '@/store/books';
import { useEffect } from 'react';
import { useBooksWithCategories, useBooksLoading } from '@/store/books';
import CategoryHeader from '@/components/CategoryHeader';
import BookInfoBox from '@/components/BookInfoBox';
import ReactLoading from 'react-loading';

export default function Home() {
  const data: IBooksWithCategories[] = useBooksWithCategories();
  const isLoading = useBooksLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookCategoriesAction());
  }, []);

  if (isLoading) {
    return <ReactLoading type='spin' color='#009ef7' height={50} width={50} />;
  }

  return (
    <div>
      <MySwiper />
      <div className=''>
        {data?.map((item) => (
          <div key={item.id} className=''>
            <CategoryHeader data={item.category} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[60px]'>
              {item.products.map((product) => (
                <BookInfoBox book={product} category={item.category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
