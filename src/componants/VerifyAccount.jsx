import React from 'react';
import ats from "../img/ATS.svg";

const VerifyAccount = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50  ">
      <div className="absolute top-10  flex justify-center w-full">
        <img src={ats} alt="ats" className='w-[101.67px] h-[40px]  mt-8' />
      </div>
      <div className="max-w-[440px] sm:w-full bg-white rounded-md shadow-lg mt-9 p-10 sm:p-12 ">
        <h1 className="text-3xl font-bold text-center">Verify your account</h1>
        <p className="text-center text-gray-600 text-xs mt-3 font-semi-bold">
          We have sent a code to: 
          <span className=" font-semi-bold inline-block border-b border-black "> abc@pqr.com</span>
        </p>
        <p className="text-center text-xs mt-1 font-semi-bold">Please check your email and enter the code we sent.</p>
        <div className="flex justify-center space-x-2.5 my-10">
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
          <span className="pt-3 text-[#999999]">-</span>
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
          <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-gray-300 rounded-md bg-[#EAEAEA]" />
        </div>
        <button className="w-full py-2.5 text-white bg-[#882EFD] rounded-md focus:outline-none">
          Verify Account
        </button>
        <div className="text-center text-gray-600 my-4 text-sm">
          You didn’t receive our email with verification code? Please check spam or <span className="text-[#882EFD] cursor-pointer">Resend</span>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
