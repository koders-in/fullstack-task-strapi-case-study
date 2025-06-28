import React from 'react';

function CaseStudyCard({ tag, heading, description }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 pt-30 shadow-sm hover:shadow-md transition flex flex-col gap-2  ">
      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-xl text-sm font-medium w-max mb-9">
        {tag}
      </div>
      <h2 className="text-xl font-semibold text-black mb-2">
        {heading}
      </h2>
      <p className="text-gray-500 text-justify text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default CaseStudyCard;
