import React, { useState, useEffect } from "react";
import { BookOpen, Award, Calendar, MapPin, FileText } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample education data
  const educationData = [
    {
      id: 1,
      degree: "Lorem Ipsum Degree",
      institution: "University of Lorem Ipsum",
      location: "Lorem City, Ipsum",
      duration: "2018 - 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem.",
      courses: [
        "Data Analysis",
        "Web Development",
        "Data Structures",
        "Algorithms",
      ],
      achievements: [
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing elit",
        "Proin ornare magna eros",
      ],
    },
    {
      id: 2,
      degree: "Lorem Diploma",
      institution: "Ipsum Technical Institute",
      location: "Dolor City, Sit",
      duration: "2016 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem.",
      courses: [
        "Programming Fundamentals",
        "Database Design",
        "UI/UX Design",
        "System Analysis",
      ],
      achievements: ["Lorem ipsum dolor sit", "Consectetur adipiscing elit"],
    },
    {
      id: 3,
      degree: "Lorem Certificate",
      institution: "Dolor Online Academy",
      location: "Online",
      duration: "2015",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.",
      courses: ["Advanced Analytics", "Data Visualization"],
      achievements: ["Lorem ipsum dolor sit"],
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="flex items-center mb-6">
            <BookOpen size={28} className="mr-3 text-black dark:text-white" />
            <h1 className="text-4xl md:text-5xl font-bold">Education</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}>
              {/* Card Header */}
              <div className="bg-black dark:bg-white p-4">
                <h3 className="text-white dark:text-black text-xl font-bold">
                  {edu.degree}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award
                    size={18}
                    className="mr-2 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <MapPin
                    size={18}
                    className="mr-2 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <Calendar
                    size={18}
                    className="mr-2 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {edu.description}
                </p>

                {/* Courses */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <FileText
                      size={18}
                      className="mr-2 text-gray-800 dark:text-gray-200"
                    />
                    <h4 className="font-bold">Key Courses</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.courses.map((course, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center mb-3">
                    <Award
                      size={18}
                      className="mr-2 text-gray-800 dark:text-gray-200"
                    />
                    <h4 className="font-bold">Achievements</h4>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
