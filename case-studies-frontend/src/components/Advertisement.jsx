import React from "react";
import Button from "./Button"; 

function Advertisement() {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center p-6 gap-4">

      <div className="flex flex-col gap-2 max-w-xl">
        <h2 className="text-2xl font-bold text-gray-800">
          Boost your Internet Security
        </h2>
        <p className="text-gray-600">
          Store and manage your digital password with just a click of a button
        </p>
      </div>

      <div className="flex-shrink-0">
        <Button
          bgColor="bg-blue-600"
          textColor="text-white"
          label="Claim 25% Discount"
        />
      </div>
    </div>
  );
}

export default Advertisement;
