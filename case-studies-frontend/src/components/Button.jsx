import React from "react";

function Button({ bgColor = "bg-transparent", textColor = "text-black", label }) {
  return (
    <button
      className={`px-6 py-2 ${bgColor} ${textColor} border-gray-500 font-semibold rounded-md hover:opacity-80 transition-all duration-200 shadow-inner`}
      style={{ boxShadow: "inset 0 1px 3px rgba(255, 255, 255, 0.3)" }}
    >
      {label}
    </button>
  );
}

export default Button;
