import React from 'react';
import Button from './Button'; // Make sure Button component is correctly imported

function Password() {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center justify-center text-center px-4">
      {/* Star Ratings */}
      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          {/* Replace with a green star icon if needed */}
          <span className="text-white bg-green-500 rounded-full w-6 h-6 flex justify-center items-center text-xl">★</span>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-black">4.9/5</span> on Trustpilot
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Replace with a green star icon if needed */}
          <span className="text-white bg-red-500 rounded-full w-6 h-6 flex justify-center items-center text-xl">★</span>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-black">4.9/5</span> on Trustpilot
          </p>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Strong Passwords, Effortless Access
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-gray-600 mb-8 text-base md:text-lg">
        Defendia provides businesses and individuals worldwide with a secure and convenient way
        to manage passwords, passkeys, credit cards, and other sensitive information.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button bgColor="bg-blue-600" textColor="text-white" label="For Family Use" />
        <Button textColor="text-black" label="For Personal Use" />
      </div>
    </div>
  );
}

export default Password;
