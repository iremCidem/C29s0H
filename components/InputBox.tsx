import React from 'react';
import { Formik, Field, Form } from 'formik';

function InputBox({ placeholder, label, name, classname }: any) {
  return (
    <div className={classname}>
      <h3 className='text-xl font-semibold mb-2.5'>{label}</h3>
      <Field
        name={name}
        type='text'
        className='bg-input-color h-[60px] w-[400px] rounded pl-4'
        placeholder={placeholder}
      />
    </div>
  );
}
export default InputBox;
