import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            I'm a passionate developer focused on creating beautiful and functional web applications.
            Explore my projects and learn more about my journey in software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              View Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {/* Featured Section Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Skills & Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover my technical skills and areas of expertise in software development.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about my educational background and continuous learning journey.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore my professional experience and past projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
