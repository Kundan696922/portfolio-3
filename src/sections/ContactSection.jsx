import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Text */}
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            Let's debug together...
          </h2>
          <p className="hidden md:block text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            Open to collaborations, projects, or just a tech chat. If you’ve got
            an idea or opportunity, let’s connect and build something great
            together!
          </p>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <form
            className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-5"
            action="https://formsubmit.co/kgoyary824@gmail.com"
            method="POST"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              Contact Me
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your name..."
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email..."
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
