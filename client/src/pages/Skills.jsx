import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => `${theme.colors.secondary}15`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => `${theme.colors.secondary}15`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsData = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks',
      proficiency: 90,
      skills: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
      proficiency: 85,
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs']
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user experiences',
      proficiency: 80,
      skills: ['Figma', 'Adobe XD', 'Responsive Design']
    },
    {
      title: 'DevOps',
      description: 'Managing deployment and development operations',
      proficiency: 75,
      skills: ['Git', 'Docker', 'CI/CD', 'AWS']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <SkillsSection>
      <SkillsContainer>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Technical Skills
        </motion.h2>
        <SkillsGrid
          ref={ref}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} variants={cardVariants}>
              <SkillIcon>
                {/* You can add specific icons for each skill category */}
              </SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <div>
                {skill.skills.map((item, i) => (
                  <motion.span
                    key={i}
                    style={{
                      display: 'inline-block',
                      margin: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      background: `${({ theme }) => theme.colors.secondary}15`,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <ProgressBar>
                <Progress
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </ProgressBar>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;