import React from "react";
import RatingStars from "./RatingStars";

const CourseCard = ({
  course,
  onViewDetails,
  onToggleFavorite,
  isFavorite,
}) => (
  <div className="bg-white rounded-xl shadow-card p-4 hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(course.id);
        }}
        className={`absolute top-3 right-3 p-2 rounded-full ${
          isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-400"
        } shadow-md hover:bg-red-500 hover:text-white transition`}
      >
        <i className={`${isFavorite ? "fas" : "far"} fa-heart`}></i>
      </button>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
      {course.name}
    </h3>
    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
      {course.description}
    </p>
    <RatingStars rating={course.rating} />
    <div className="flex items-center justify-between mt-3">
      <p className="text-xl font-bold text-primary-700">
        {course.price.toLocaleString()} VND
      </p>
      <button
        onClick={() => onViewDetails(course)}
        className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
      >
        View Details
      </button>
    </div>
  </div>
);

export default CourseCard;
