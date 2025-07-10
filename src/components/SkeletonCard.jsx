import React from "react";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-card p-4 animate-pulse overflow-hidden">
    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
    <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>
    <div className="h-10 bg-gray-200 rounded-lg mt-4"></div>
  </div>
);

export default SkeletonCard;
