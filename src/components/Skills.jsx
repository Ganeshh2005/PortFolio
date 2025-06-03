import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', level: 85, icon: <SiExpress /> },
    { name: 'MongoDB', level: 80, icon: <SiMongodb className="text-green-600" /> },
    { name: 'JavaScript', level: 90, icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', level: 75, icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Python', level: 85, icon: <FaPython className="text-blue-500" /> },
    { name: 'SQL', level: 80, icon: <FaDatabase className="text-blue-400" /> },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'UI/UX Design', level: 85, icon: <FaFigma /> }
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
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{skill.icon}</span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                  />
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300 text-right">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 