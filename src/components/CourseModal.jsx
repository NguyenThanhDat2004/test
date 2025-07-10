import React from "react";
import RatingStars from "./RatingStars";

const CourseModal = ({ course, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{course.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-primary-700">
                {course.price.toLocaleString()} VND
              </p>
              <div className="flex items-center mt-1">
                <RatingStars rating={course.rating} />
                <span className="ml-2 text-sm text-gray-600">
                  ({course.students} students)
                </span>
              </div>
            </div>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
              Enroll Now
            </button>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Course Description
            </h3>
            <p className="text-gray-700">{course.longDescription}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="font-medium">{course.instructor}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-medium">{course.duration}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">What You'll Learn</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Master core concepts and best practices</li>
              <li>Build real-world projects</li>
              <li>Get hands-on coding experience</li>
              <li>Access to community support</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseModal;
