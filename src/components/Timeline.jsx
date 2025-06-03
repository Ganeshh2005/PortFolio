import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaNewspaper } from 'react-icons/fa';

const Timeline = () => {
  const achievements = [
    {
      title: 'D-Beyond UI/UX Competition',
      description: 'Won first place in the UI/UX design competition organized by D-Beyond.',
      date: '2023',
      icon: <FaTrophy className="text-yellow-500" />
    },
    {
      title: 'Techknowevent',
      description: 'Secured second position in the technical project competition.',
      date: '2023',
      icon: <FaTrophy className="text-yellow-500" />
    },
    {
      title: 'AI Content Creation Research Paper',
      description: 'Published research on AI-driven content creation methodologies.',
      date: '2023',
      icon: <FaNewspaper className="text-blue-500" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Achievements & Publications
          </h2>
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center z-10">
                  {achievement.icon}
                </div>
                <div className="ml-6 flex-grow">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
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

export default Timeline; 