import React from "react";
import AuthorImg from "../../../assets/ISIS32 (1).png";
import AuthorShadow from "../../../assets/MS425.png";

const Author = () => {
  return (
    <section className="container bg-base-200 mb-16 py-16 px-4 lg:px-10 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-[#0f172a] leading-snug">
            Thousands of courses authored by industry experts
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Get access to 4,000+ of our top courses
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Popular topics to learn now
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              Find the right instructor for you
            </li>
          </ul>

          <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-7 py-3 rounded-md font-medium transition">
            Get Started Today
          </button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative h-[420px] flex items-end justify-center">

          {/* Background Circle */}
          <div className="absolute bottom-0 w-[360px] h-[360px] bg-green-500 rounded-full"></div>

          {/* Shadow Image (Left + Up Overlay) */}
          <img
            src={AuthorShadow}
            alt="Author Shadow"
            className="absolute left-30 -translate-x-[70%] top-10 w-[160px] opacity-70"
          />

          {/* Author Image */}
          <img
            src={AuthorImg}
            alt="Author"
            className="relative z-10 -bottom-20 w-[420px] object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Author;
