import React from "react";

const PriceFilterBadge = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? "bg-primary-500 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);

export default PriceFilterBadge;
