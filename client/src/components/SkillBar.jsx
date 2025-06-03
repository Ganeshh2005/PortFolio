import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { BsGearFill } from 'react-icons/bs';
import { AiFillExperiment } from 'react-icons/ai';
import { MdDesignServices } from 'react-icons/md';

const SkillBar = ({ skill, percentage, icon: Icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
    rootMargin: "-50px"
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const barVariants = {
    hidden: { 
      width: 0,
      opacity: 0 
    },
    visible: {
      width: `${percentage}%`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={skillVariants}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {Icon && <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
          </motion.div>
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        </div>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 text-sm font-medium"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          variants={barVariants}
          className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
        />
      </div>
    </motion.div>
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
        <SkillBar
          key={index}
          skill={skill.name}
          percentage={skill.percentage}
          icon={skill.icon}
          index={index}
        />
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