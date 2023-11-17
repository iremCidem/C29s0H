'use client';
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import FormButton from '@/components/FormButton';
import { userSignUp } from '@/services';
import Image from 'next/image';
import InputBox from '@/components/InputBox';
import Picture from '@/images/Picture.png';
import Logo from '@/images/Logo.png';

const Login = () => {
  return (
    <div className='grid grid-cols-2'>
      <Image src={Picture} alt='dshfbs' className='h-screen ' />
      <div className='flex flex-col justify-center items-center'>
        <Image src={Logo} alt='logo' />
        <p className='text-2xl'>Welcome Back!</p>
        <p className='text-[32px] leading-[43.71px]'>Login to your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <Form className='flex flex-col'>
            <InputBox placeholder='john@mail.com' label='E-mail' name='email' />
            <InputBox placeholder='******' label='Password' name='password' />
            <div className='form-group form-check flex items-center'>
              <input name='acceptTerms' type='checkbox' id='acceptTerms' className='form-check-input me-1' />
              <label htmlFor='acceptTerms' className='form-check-label text-base'>
                Remember Me
              </label>
            </div>
            <FormButton borderColor='btn-border-color' type='button'>
              Register
            </FormButton>
            <FormButton bgColor='bg-button-orange' type='submit'>
              Login
            </FormButton>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
