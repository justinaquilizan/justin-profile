import React, { useState, useEffect } from "react";
import { Code, ExternalLink, Github, BarChart } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive dashboard for monitoring key metrics.",
      longDescription:
        "This project showcases a full-stack analytics solution using React, Node.js, and MongoDB. The frontend visualizes data using D3.js, while the backend handles real-time updates and storage.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      githubLink: "#",
      demoLink: "#",
      icon: <BarChart size={24} />,
    },
    {
      id: 2,
      title: "Data Visualization Tool",
      description: "An intuitive tool to turn raw data into insights.",
      longDescription:
        "Built with Flask and Python libraries, this tool reads datasets and generates customizable charts. It supports CSV/Excel input and dynamic chart types like bar, line, and scatter plots.",
      technologies: ["Python", "Pandas", "Matplotlib", "Flask"],
      githubLink: "#",
      demoLink: "#",
      icon: <Code size={24} />,
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="flex items-center mb-6">
            <Code size={28} className="mr-3 text-black dark:text-white" />
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Explore a selection of my personal and academic projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 * index}ms` }}
              onClick={() => setActiveProject(project)}>
              <div className="bg-gray-200 dark:bg-gray-700 h-64 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Project Image Placeholder
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-3 text-gray-800 dark:text-gray-200">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="text-black dark:text-white font-medium flex items-center hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}>
                    View Details <ExternalLink size={16} className="ml-1" />
                  </button>

                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
              className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                <button
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  onClick={() => setActiveProject(null)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="bg-gray-200 dark:bg-gray-700 h-80 mb-6 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Project Image Placeholder
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {activeProject.longDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={activeProject.githubLink}
                    className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-medium flex items-center">
                    <Github size={20} className="mr-2" />
                    View on GitHub
                  </a>
                  <a
                    href={activeProject.demoLink}
                    className="border-2 border-black dark:border-white px-6 py-3 rounded-md font-medium flex items-center">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
