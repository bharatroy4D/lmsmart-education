import React from "react";

const Author = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#0f172a] leading-tight">
            Thousands of courses authored <br /> by industry experts
          </h2>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              Get access to 4,000+ of our top courses
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              Popular topics to learn now
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              Find the right instructor for you
            </li>
          </ul>

          <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition">
            Get Started Today
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Yellow Circle */}
          <div className="absolute w-[320px] h-[320px] bg-yellow-400 rounded-full"></div>

          {/* Author Image */}
          <img
            src="/author.png"
            alt="Author"
            className="relative z-10 w-[280px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Author;
