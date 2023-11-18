import React from 'react';

const FormButton = ({ children, bgColor, borderColor, type, textColor }: any) => {
  return (
    <>
      <button
        type={type}
        className={`${bgColor} ${textColor} ${
          textColor === 'text-purple' ? 'btn-border-color' : 'border-0'
        } w-[400px] h-[60px] rounded text-[20px] mt-2.5`}
      >
        {children}
      </button>
    </>
  );
};

export default FormButton;
