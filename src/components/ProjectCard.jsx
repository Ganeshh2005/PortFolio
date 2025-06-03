import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = () => {
  const projects = [
    {
      title: 'DripMart',
      description: 'An e-commerce platform for fashion and accessories with advanced filtering and search capabilities.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Ganeshh2005/DripMart',
      live: 'https://dripmart.vercel.app'
    },
    {
      title: 'MediPredict',
      description: 'AI-powered medical diagnosis prediction system using machine learning algorithms.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: 'https://github.com/Ganeshh2005/MediPredict',
      live: 'https://medipredict.vercel.app'
    },
    {
      title: 'ZevZone',
      description: 'A social media platform for EV enthusiasts to share experiences and connect.',
      tech: ['React', 'Firebase', 'Node.js', 'Express'],
      github: 'https://github.com/Ganeshh2005/ZevZone',
      live: 'https://zevzone.vercel.app'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasting application with location-based services.',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      github: 'https://github.com/Ganeshh2005/WeatherApp',
      live: 'https://weather-app-ganesh.vercel.app'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard; 