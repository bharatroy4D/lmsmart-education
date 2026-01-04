import React from "react";

const CoursesBanner = () => {
  return (
    <section className="relative bg-gradient-to-r  from-blue-50 to-green-200 py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        
        {/* Breadcrumb */}
        <p className="text-sm mb-4 opacity-90">
          Home <span className="mx-2">/</span> Courses
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Explore Our Popular Courses
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-95">
          Learn new skills from industry experts and boost your career with our
          high-quality online courses.
        </p>

      </div>
    </section>
  );
};

export default CoursesBanner;
