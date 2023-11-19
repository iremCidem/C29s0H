import React from 'react';
import { useRouter } from 'next/navigation';

const FormButton = ({ children, bgColor, borderColor, type, textColor, navigate }: any) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          if (navigate) {
            children === 'Register' ? router.push('/register') : router.push('/');
          }
        }}
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
