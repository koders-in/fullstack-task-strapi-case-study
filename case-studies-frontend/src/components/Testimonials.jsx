import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; 

function Testimonials() {
  const [activeTab, setActiveTab] = useState('Business');

  const categories = ['Business', 'Twitter', 'Trustpilot', 'Youtube'];

  return (
    <div className="w-full flex justify-center py-10 bg-gray-50">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center  ">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-green-300 rounded-full p-2">
            <FaHeart className="text-white" />
          </div>
          <p className="text-green-600 font-semibold text-lg">Testimonial</p>
        </div>

        <h1 className="text-3xl font-bold mb-1">
          Customers love using <span className="text-green-600">Defendia</span>
        </h1>
        <p className="text-gray-600 mb-4">
          Learn what all types of customers have to say about our services.
        </p>

        {/* Category Tabs */}
        <div className="rounded-full bg-gray-200 flex gap-2 p-2 w-fit mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full transition duration-200 ${
                activeTab === category
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300"
            >
              <h4 className="text-lg font-semibold mb-2">
                Heading about the review
              </h4>
              <p className="text-gray-600 mb-4">
                This is a sample paragraph about how Defendia helped customers
                stay safe and secure. Great product!
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">CTO, TechCorp</p>
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Company Logo"
                  className="h-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
