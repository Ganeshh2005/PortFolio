import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.lightText};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

const SkillsContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const About = () => {
  const [contentRef, contentInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AboutSection>
      <AboutContainer>
        <AboutGrid>
          <AboutContent
            ref={contentRef}
            variants={contentVariants}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate full-stack developer with a keen eye for creating beautiful and functional web applications. With years of experience in web development, I specialize in building modern, responsive, and user-friendly applications.
            </p>
            <p>
              My journey in web development started with a curiosity for creating things that live on the internet. Since then, I've had the privilege of working on various projects that have helped me grow both as a developer and a problem solver.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices in web development.
            </p>
          </AboutContent>

          <SkillsContainer
            ref={skillsRef}
            variants={skillsContainerVariants}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
          >
            <h3>Technical Skills</h3>
            <SkillsGrid>
              {[
                'JavaScript',
                'React',
                'Node.js',
                'MongoDB',
                'Express',
                'HTML/CSS',
                'Git',
                'REST API',
              ].map((skill, index) => (
                <SkillItem
                  key={index}
                  variants={skillItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p>{skill}</p>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;