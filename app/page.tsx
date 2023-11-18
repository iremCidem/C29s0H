'use client';
import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import FormButton from '@/components/FormButton';
import Image from 'next/image';
import InputBox from '@/components/InputBox';
import Picture from '@/images/Picture.png';
import Logo from '@/images/Logo.png';
import { registerValidation } from '@/validation/registerValidation';
import { registerUserAction } from '@/store/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const navigateHome = () => {
    router.push('/home');
  };
  return (
    <div className='grid grid-cols-2'>
      <Image src={Picture} alt='login-img' className='h-screen ' />
      <div className='flex flex-col justify-center items-center'>
        <Image src={Logo} alt='logo' />
        <p className='text-2xl'>Welcome Back!</p>
        <p className='text-[32px] leading-[43.71px]'>Login to your account</p>
        <Formik
          validationSchema={registerValidation}
          initialValues={{ email: '', name: '', password: '' }}
          onSubmit={(values) => {
            dispatch(registerUserAction({ values, navigateHome }));
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col'>
              <InputBox placeholder='John Doe' label='Name-Surname' name='name' />
              <ErrorMessage name='name' component='div' className='text-red-500' />
              <InputBox placeholder='john@mail.com' label='E-mail' name='email' />
              <ErrorMessage name='email' component='div' className='text-red-500' />
              <InputBox placeholder='******' label='Password' name='password' />
              <ErrorMessage name='password' component='div' className='text-red-500' />
              <FormButton bgColor='bg-button-orange' type='submit'>
                Register
              </FormButton>
              <FormButton borderColor='btn-border-color' type='button'>
                Login
              </FormButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
