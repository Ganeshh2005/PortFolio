import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const MainContainer = styled(motion.main)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 80px; // Height of navbar
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;