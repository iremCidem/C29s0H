import React from 'react';

const FormButton = ({ children, bgColor, borderColor, type, textColor }: any) => {
  return (
    <>
      <button type={type} className={`${bgColor} ${textColor} w-[400px] h-[60px] rounded  text-[20px]`}>
        {children}
      </button>
    </>
  );
};

export default FormButton;
