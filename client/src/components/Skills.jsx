import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'MongoDB', icon: SiMongodb, level: 85 },
  { name: 'Express.js', icon: SiTypescript, level: 85 },
  { name: 'AWS', icon: FaAws, level: 80 },
  { name: 'JavaScript', icon: SiTailwindcss, level: 90 },
  { name: 'HTML/CSS', icon: SiPostgresql, level: 90 },
  { name: 'Redux', icon: FaDocker, level: 85 },
  { name: 'Git', icon: FaPython, level: 85 },
  { name: 'RESTful APIs', icon: FaDatabase, level: 85 },
];

const SkillBar = ({ skill, inView }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="mb-6 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 mr-2 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="ml-auto text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors">
        <motion.div
          className="h-full bg-black dark:bg-white group-hover:bg-gray-900 dark:group-hover:bg-gray-100 transition-colors"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-white dark:bg-black" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Specialized in MERN Stack Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillBar skill={skill} inView={inView} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Always learning and exploring new technologies!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 