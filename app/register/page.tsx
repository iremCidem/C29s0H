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
      <Image src={Picture} alt='login-img' className='h-full' />
      <div className='flex flex-col justify-center items-center pb-[40px]'>
        <Image src={Logo} alt='logo' className='w-[120px] h-[78px] mt-[80px] mb-[111px]' />
        <p className='text-2xl'>Welcome Back!</p>
        <p className='text-[32px] leading-[43.71px] mb-[80px]'>Login to your account</p>
        <Formik
          validationSchema={registerValidation}
          initialValues={{ email: '', name: '', password: '' }}
          onSubmit={(values) => {
            dispatch(registerUserAction({ values, navigateHome }));
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className='flex flex-col'>
              <InputBox placeholder='John Doe' label='Name-Surname' name='name' classname='mb-[40px]' />
              {touched.name && errors.name && (
                <ErrorMessage name='name' component='div' className='text-xs text-red-500 relative bottom-[40px]' />
              )}
              <InputBox placeholder='john@mail.com' label='E-mail' name='email' classname='mb-[40px]' />
              {touched.email && errors.email && (
                <ErrorMessage name='email' component='div' className='text-xs text-red-500 relative bottom-[40px]' />
              )}
              <InputBox placeholder='******' label='Password' name='password' classname='mb-[47px]' />
              {touched.password && errors.password && (
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-xs  text-red-500 relative bottom-[47px]'
                />
              )}
              <FormButton bgColor='bg-button-orange' textColor='text-white' type='submit' navigate='false'>
                Register
              </FormButton>
              <FormButton borderColor='btn-border-color' textColor='text-purple' type='button' navigate='true'>
                Login
              </FormButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
