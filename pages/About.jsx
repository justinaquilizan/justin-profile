import React, { useState, useEffect } from "react";
import { User, Clock, Heart, Globe, Book } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("background");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation classes for content entrance
  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className={`transition-all duration-700 delay-100 ${animationClasses}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
          <div className="w-20 h-1 bg-black dark:bg-white mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image Section */}
          <div
            className={`md:col-span-1 transition-all duration-700 delay-200 ${animationClasses}`}>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1 bg-gray-300 dark:bg-gray-700 flex items-center justify-center h-80">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  Profile Image Placeholder
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Data Analyst & Web Developer
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Analytics", "React", "Python", "Data Science"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Information Tabs Section */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-300 ${animationClasses}`}>
            {/* Tab Navigation */}
            <div className="flex mb-6 border-b border-gray-200 dark:border-gray-800">
              {[
                {
                  id: "background",
                  label: "Background",
                  icon: <User size={18} />,
                },
                {
                  id: "experience",
                  label: "Experience",
                  icon: <Clock size={18} />,
                },
                {
                  id: "interests",
                  label: "Interests",
                  icon: <Heart size={18} />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                      : "text-gray-500 hover:text-black dark:hover:text-white"
                  }`}>
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              {/* Background Tab */}
              <div
                className={`transition-opacity duration-300 ${
                  activeTab === "background"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}>
                <div className="flex items-start mb-6">
                  <Globe
                    className="mr-4 text-gray-800 dark:text-gray-200 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Personal Background
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Tab */}
              <div
                className={`transition-opacity duration-300 ${
                  activeTab === "experience"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}>
                <div className="flex items-start mb-6">
                  <Clock
                    className="mr-4 text-gray-800 dark:text-gray-200 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Professional Journey
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests Tab */}
              <div
                className={`transition-opacity duration-300 ${
                  activeTab === "interests"
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}>
                <div className="flex items-start mb-6">
                  <Heart
                    className="mr-4 text-gray-800 dark:text-gray-200 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Hobbies & Interests
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {[
                        "Reading",
                        "Traveling",
                        "Data Analysis",
                        "Photography",
                      ].map((hobby, index) => (
                        <div key={index} className="flex items-center">
                          <Book
                            size={16}
                            className="mr-2 text-gray-600 dark:text-gray-400"
                          />
                          <span>{hobby}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
