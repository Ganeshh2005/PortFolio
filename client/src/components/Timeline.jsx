import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    year: '2025 - Present',
    title: 'Software Engineer Intern',
    company: 'YugYatra Retail Pvt Ltd',
    description: 'Working on full-stack development using modern technologies. Developing and maintaining web applications, implementing new features, and ensuring optimal performance.',
  },
  {
    year: '2023 - 2024',
    title: 'Data Visualization Intern',
    company: 'Cognify Technologies',
    description: 'Specialized in creating interactive data visualizations and dashboards. Worked with data analysis tools and visualization libraries to present complex data in an intuitive way.',
  },
  {
    year: '2022 - 2023',
    title: 'Campus Ambassador',
    company: 'LaunchED Global',
    description: 'Served as a bridge between the organization and campus community. Organized tech events, workshops, and promoted technological awareness among students.',
  },
  {
    year: '2021',
    title: 'Human Resource Manager Intern',
    company: 'Bharat Verse',
    description: 'Managed HR operations, coordinated with team members, and assisted in recruitment processes. Gained valuable experience in team management and organizational skills.',
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-white dark:bg-black" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2 px-6">
                  <div className={`p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Circle */}
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-gray-50 dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 