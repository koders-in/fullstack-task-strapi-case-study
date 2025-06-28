import React from "react";
import Button from "./Button"; 

function Newsletter() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Sign up for our Newsletter</h2>
          <p className="text-gray-600">
            Stay up to date with the latest news, updates, and exclusive content.
            Join our community of smart readers!
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button bgColor="bg-blue-600"
                textColor="text-white"
                label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
