import React, { useEffect, useState } from "react";

const BlogItems = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Blog.json")
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading blogs...
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-10">

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    👤 {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    💬 {blog.comments} Comments
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-lg leading-snug mb-3 hover:text-emerald-600 transition cursor-pointer">
                  {blog.title}
                </h3>

                {/* Read More */}
                <button className="text-sm font-semibold text-emerald-600 hover:underline cursor-pointer">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogItems;
