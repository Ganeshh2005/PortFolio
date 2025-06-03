import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.secondary}20 0%, transparent 50%);
    transform: rotate(-45deg);
    filter: blur(80px);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.secondary}40);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.glass.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.glass.border};
  backdrop-filter: blur(10px);
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.colors.glass.shadow};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-color: transparent;
    color: white;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  
  svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const BackgroundAnimation = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, ${({ theme }) => theme.colors.secondary}20 0%, transparent 70%);
  filter: blur(60px);
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 300px;
    height: 300px;
  }
`;

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <HeroSection>
      <BackgroundAnimation
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <HeroContent ref={ref}>
        <HeroText
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Title variants={itemVariants}>
            Crafting Digital Experiences
          </Title>
          <Subtitle variants={itemVariants}>
            Full-stack developer specializing in creating engaging and innovative web solutions
          </Subtitle>
          <motion.div variants={itemVariants}>
            <CTAButton
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </CTAButton>
          </motion.div>
        </HeroText>
        <HeroImage
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="${({ theme }) => theme.colors.secondary}"
              d="M45.7,-78.3C58.9,-71.9,69.3,-58.7,76.4,-43.9C83.5,-29.1,87.3,-12.7,85.8,3.1C84.2,19,77.4,34.2,67.4,46.2C57.4,58.2,44.2,66.9,30,71.7C15.8,76.4,0.6,77.2,-14.8,74.8C-30.2,72.4,-45.8,66.9,-58.5,57C-71.2,47.1,-81,32.8,-84.6,16.8C-88.2,0.8,-85.6,-16.9,-78.9,-32.2C-72.2,-47.5,-61.4,-60.3,-47.8,-66.4C-34.2,-72.6,-17.1,-72,-0.2,-71.7C16.8,-71.3,33.5,-71.2,45.7,-78.3Z"
              transform="translate(100 100)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="100 100; 102 98; 100 100"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;