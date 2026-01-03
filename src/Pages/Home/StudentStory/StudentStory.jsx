import React from "react";
import Img1 from "../../../assets/Students/JON972.jpg";
import Img2 from "../../../assets/Students/MU120.jpg";
import Img3 from "../../../assets/Students/UU120.png";

const students = [
  {
    id: 1,
    img: Img1,
    text:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
    name: "Charlie Keller",
    role: "Developer",
  },
  {
    id: 2,
    img: Img2,
    text:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
    name: "James Smith",
    role: "CFO Apple Corp",
  },
  {
    id: 3,
    img: Img3,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore Lorem ipsum",
    name: "Mark Donald",
    role: "Manager",
  },
];

const StudentStory = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      
      {/* SECTION TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a5f]">
          Stories of <span className="text-yellow-500">Successful</span> Students
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {students.map((student) => (
          <div
            key={student.id}
            className="relative bg-gray-50 rounded-2xl px-8 pt-20 pb-10 shadow-sm"
          >
            {/* Student Image */}
            <div className="absolute -top-12 left-8">
              <img
                src={student.img}
                alt={student.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white"
              />
            </div>

            {/* Text */}
            <p className="text-[#0f2a5f] leading-relaxed mb-10">
              {student.text}
            </p>

            {/* Bottom Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                “
              </div>
              <div>
                <h4 className="font-semibold text-[#0f2a5f]">
                  {student.name}
                </h4>
                <p className="text-gray-500 text-sm">{student.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StudentStory;
