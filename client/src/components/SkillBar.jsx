import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import { AiFillExperiment } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';

const SkillBar = ({ skill, percentage, icon: Icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls, inView, percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={controls}
          className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'Frontend Development', percentage: 90, icon: BiCodeAlt },
    { name: 'Backend Development', percentage: 85, icon: BsGearFill },
    { name: 'React.js', percentage: 95, icon: FaReact },
    { name: 'Node.js', percentage: 88, icon: FaNodeJs },
    { name: 'Python', percentage: 85, icon: FaPython },
    { name: 'Machine Learning', percentage: 80, icon: AiFillExperiment },
    { name: 'MongoDB', percentage: 85, icon: FaDatabase },
    { name: 'UI/UX Design', percentage: 82, icon: MdDesignServices },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <SkillBar
            skill={skill.name}
            percentage={skill.percentage}
            icon={skill.icon}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Add shimmer animation keyframes to the document
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
document.head.appendChild(style);

export default SkillsSection; 