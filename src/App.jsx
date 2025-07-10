import React, { useState, useEffect } from "react";
import { mockCourses, mockApi } from "./data";
import CourseCard from "./components/CourseCard";
import CourseModal from "./components/CourseModal";
import SkeletonCard from "./components/SkeletonCard";
import Toast from "./components/Toast";
import PriceFilterBadge from "./components/PriceFilterBadge";

const App = () => {
  const [courses] = useState(mockCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [toast, setToast] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowercCase()) 
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under500" && course.price < 500000) ||
      (priceFilter === "500to1m" &&
        course.price >= 500000 &&
        course.price <= 1000000) ||
      (priceFilter === "over1m" && course.price > 1000000);
    return matchesSearch && matchesPrice;
  });

  const toggleFavorite = (courseId) => {
    const isFavorite = favorites.includes(courseId);
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== courseId));
      setToast({ message: "Removed from favorites" });
    } else {
      setFavorites([...favorites, courseId]);
      setToast({ message: "Added to favorites" });
    }
  };

  const viewCourseDetails = (course) => {
    setSelectedCourse(course);
    setViewHistory((prev) => [...new Set([course.id, ...prev])].slice(0, 5));
  };

  const fetchSuggestions = async () => {
    setIsLoadingSuggestions(true);
    const response = await mockApi.getSuggestions("user123");
    setIsLoadingSuggestions(false);
    if (response.success) {
      setSuggestions(response.data);
    } else {
      setToast({ message: response.error });
    }
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Discover Your Next Course
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn from the best instructors and take your skills to the next level
        </p>
      </header>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-5 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button
            onClick={fetchSuggestions}
            className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-xl transition-colors duration-300 flex items-center justify-center"
          >
            <i className="fas fa-magic mr-2"></i>
            Get Recommendations
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <PriceFilterBadge
            active={priceFilter === "all"}
            onClick={() => setPriceFilter("all")}
          >
            All Courses
          </PriceFilterBadge>
          <PriceFilterBadge
            active={priceFilter === "under500"}
            onClick={() => setPriceFilter("under500")}
          >
            Under 500K
          </PriceFilterBadge>
          <PriceFilterBadge
            active={priceFilter === "500to1m"}
            onClick={() => setPriceFilter("500to1m")}
          >
            500K - 1M
          </PriceFilterBadge>
          <PriceFilterBadge
            active={priceFilter === "over1m"}
            onClick={() => setPriceFilter("over1m")}
          >
            Over 1M
          </PriceFilterBadge>
        </div>
      </div>

      {isLoadingSuggestions ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        suggestions.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Recommended For You
              </h2>
              <button
                onClick={() => setSuggestions([])}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onViewDetails={viewCourseDetails}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(course.id)}
                />
              ))}
            </div>
          </div>
        )
      )}

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Courses</h2>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={viewCourseDetails}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(course.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-book-open text-5xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-medium text-gray-600">
              No courses found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {favorites.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses
              .filter((course) => favorites.includes(course.id))
              .map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onViewDetails={viewCourseDetails}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={true}
                />
              ))}
          </div>
        </div>
      )}

      {viewHistory.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Recently Viewed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses
              .filter((course) => viewHistory.includes(course.id))
              .map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onViewDetails={viewCourseDetails}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(course.id)}
                />
              ))}
          </div>
        </div>
      )}

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {toast && (
        <Toast message={toast.message} onClose={() => setToast(null)} />
      )}
    </div>
  );
};

export default App;
