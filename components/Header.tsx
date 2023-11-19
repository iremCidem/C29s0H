'use client';
import React, { useEffect } from 'react';
import Logo from '@/images/Logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToken } from '@/store/auth';

const Header = () => {
  const router = useRouter();
  const authToken = useToken();

  useEffect(() => {
    if (!authToken) {
      router.push('/');
    }
  }, []);

  return (
    <div className='  items-center flex header-shadow mb-10 px-[60px] py-[35px] gap-[10.5%] '>
      <Image
        src={Logo}
        alt='header-logo'
        className='w-[60px] h-[39px] cursor-pointer float-left  '
        onClick={() => router.push('/home')}
      />
      <div className='relative flex items-center w-[60%]  '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-4 h-4 absolute left-2'
        >
          <path d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
        </svg>
        <input
          style={{ textIndent: '10px' }}
          type='search'
          className='bg-input-color px-5 py-2.5 rounded h-[50px] flex-1 inline'
          placeholder='    Search'
        />
      </div>

      <div className='flex items-center gap-x-4 absolute right-[60px]'>
        <div className='bg-input-color w-[50px] h-[50px] grid place-items-center rounded cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#F4F4FF'
            stroke='black'
            strokeWidth='2'
            className='w-6 h-6'
          >
            <path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
          </svg>
        </div>
        <div className='bg-input-color w-[50px] h-[50px] grid place-items-center rounded cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#F4F4FF'
            stroke='black'
            strokeWidth='2'
            className='w-6 h-6'
          >
            <path d='M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z' />
          </svg>
        </div>
        <div className='bg-input-color min-w-[50px] h-[50px] flex items-center justify-center rounded cursor-pointer '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#F4F4FF'
            stroke='black'
            strokeWidth='2'
            className='w-6 h-6'
          >
            <path d='M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
