import React from 'react';

const FormButton = ({ children, bgColor, borderColor, type }: any) => {
  return (
    <>
      <button type={type} className={`${bgColor} w-[400px] h-[60px] rounded`}>
        {children}
      </button>
    </>
  );
};

export default FormButton;
