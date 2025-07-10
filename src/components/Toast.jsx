import React from "react";

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in">
    <i className="fas fa-check-circle mr-2"></i>
    {message}
    <button
      onClick={onClose}
      className="ml-4 text-white hover:text-gray-200 transition"
    >
      <i className="fas fa-times"></i>
    </button>
  </div>
);

export default Toast;
