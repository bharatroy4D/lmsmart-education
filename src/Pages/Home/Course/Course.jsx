import React from "react";
import Img1 from "../../../assets/CourseImg/GER467.jpg";
import Img2 from "../../../assets/CourseImg/MJKS424.jpg";
import Img3 from "../../../assets/CourseImg/MJKS490.jpg";
import Img4 from "../../../assets/CourseImg/MKH283.jpg";
import { FaPlay } from "react-icons/fa";

const courseData = [
  {
    id: 1,
    img: Img1,
    title: "Taught by industry professionals",
  },
  {
    id: 2,
    img: Img2,
    title: "Learn from the expert course mentor",
  },
  {
    id: 3,
    img: Img3,
    title: "Discuss your future career goals",
  },
  {
    id: 4,
    img: Img4,
    title: "Mentorship and community support",
  },
];

const Course = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 py-16">
      
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0f172a]">
          Why <span className="text-yellow-500">Take</span> This Course
        </h2>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courseData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600">
                <FaPlay className="ml-1" />
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-medium text-sm leading-snug">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
