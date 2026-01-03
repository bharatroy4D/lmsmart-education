import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const categories = ["All", "Business", "Finance", "Lifestyle", "Technology", "Marketing"];

const CourseItem = () => {
  const [courses, setCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load courses:", err);
        setLoading(false);
      });
  }, []);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter(course => course.category === activeCategory);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading courses...
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Popular Courses
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-semibold pb-1 border-b-2 transition
                ${
                  activeCategory === cat
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-green-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded">
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 leading-snug mb-3">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  👤 {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(course.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">
                    ({course.reviews})
                  </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-sm text-gray-500">
                    👥 {course.students}
                  </span>

                  <span className="font-bold text-green-600">
                    {course.price === 0 ? "Free" : `$${course.price}`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseItem;
