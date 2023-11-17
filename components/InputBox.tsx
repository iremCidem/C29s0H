import React from 'react';
import { Formik, Field, Form } from 'formik';

function InputBox({ placeholder, label, name }: any) {
  return (
    <>
      <h3 className='text-xl font-semibold'>{label}</h3>
      <Field name={name} type='text' className='bg-input-color h-[60px] rounded' placeholder={placeholder} />
    </>
  );
}
export default InputBox;
