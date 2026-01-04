import React from "react";

const BlogBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-400 to-purple-600 py-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        
        {/* Breadcrumb */}
        <p className="text-sm mb-4 opacity-90">
          Home <span className="mx-2">/</span> Blog
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Our Latest Blogs & Articles
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-95">
          Stay updated with the latest trends, tips, and insights from our
          experts in web development, design, and technology.
        </p>

      </div>
    </section>
  );
};

export default BlogBanner;
