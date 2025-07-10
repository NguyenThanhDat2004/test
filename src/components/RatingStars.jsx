import React from "react";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? (
            <i className="fas fa-star text-yellow-400"></i>
          ) : hasHalfStar && i === fullStars ? (
            <i className="fas fa-star-half-alt text-yellow-400"></i>
          ) : (
            <i className="far fa-star text-yellow-400"></i>
          )}
        </span>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
