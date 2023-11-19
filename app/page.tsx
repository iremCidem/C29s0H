'use client';
import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import FormButton from '@/components/FormButton';
import { loginUserAction } from '@/store/auth';
import Image from 'next/image';
import InputBox from '@/components/InputBox';
import Picture from '@/images/Picture.png';
import Logo from '@/images/Logo.png';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginValidation } from '@/validation/loginValidation';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const navigateHome = () => {
    router.push('/home');
  };

  return (
    <div className='grid grid-cols-2 '>
      <Image src={Picture} alt='loginPage' className='h-full' />
      <div className='flex flex-col items-center pb-[40px]'>
        <Image src={Logo} alt='logo' className='w-[120px] h-[78px] mt-[80px] mb-[111px]' />
        <p className='text-2xl'>Welcome Back!</p>
        <p className='text-[32px] leading-[43.71px] mb-[80px] '>Login to your account</p>
        <Formik
          validationSchema={loginValidation}
          initialValues={{ email: '', password: '', rememberMe: false }}
          onSubmit={(values) => {
            dispatch(loginUserAction({ values, navigateHome }));
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className='flex flex-col'>
              <InputBox placeholder='john@mail.com' label='E-mail' name='email' classname='mb-[40px]' />
              {touched.email && errors.email && (
                <ErrorMessage name='email' component='div' className='text-xs text-red-500 relative bottom-[40px]' />
              )}
              <InputBox placeholder='******' label='Password' name='password' />
              {touched.password && errors.password && (
                <ErrorMessage name='password' component='div' className='text-xs text-red-500' />
              )}
              <div className='form-group form-check flex items-center mb-[150px] mt-[7px]'>
                <Field
                  type='checkbox'
                  name='rememberMe'
                  type='checkbox'
                  id='acceptTerms'
                  className='form-check-input me-1'
                />

                <label htmlFor='rememberMe' className='form-check-label text-base'>
                  Remember Me
                </label>
              </div>
              <FormButton bgColor='bg-button-orange' textColor='text-white' type='submit' navigate={false}>
                Login
              </FormButton>
              <FormButton borderColor='btn-border-color' textColor='text-purple' type='button' navigate={true}>
                Register
              </FormButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
