import React from "react";

const projectData = [
  {
    title: "10KW On Grid",
    location: "Pakistan Town, Islamabad",
    image: "pro1.jpg",
  },
  {
    title: "20KW Hybrid",
    location: "Soan Garden Block H, Islamabad",
    image: "p2.jpg",
  },
  {
    title: "15KW On Grid",
    location: "CBR Town Block C,Street E-11, Islamabad",
    image: "pro3.jpg",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl text-blue-700 font-bold text-center mb-10">
        INSTALLED PROJECTS
      </h2>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              className="w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm flex-grow">{project.location}</p>
              <button className="mt-4 self-start px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
