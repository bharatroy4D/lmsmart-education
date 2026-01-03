import React from "react";

const NewsLatter = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-teal-600 to-green-500 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-4 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 max-w-md">
              Get the latest updates, expert tips, and exclusive course offers
              delivered straight to your inbox.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full flex-1 px-5 py-3 rounded-md text-gray-800 outline-none"
            />

            <button
              type="submit"
              className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default NewsLatter;
