import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.background};
      border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.background};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      &:hover {
        background: ${({ theme }) => theme.colors.lightText};
      }
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    transition: all ${({ theme }) => theme.transitions.slow};
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 25px 25px;
      pointer-events: none;
      z-index: -1;
      opacity: 0.1;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.default};
    
    &:hover {
      transform: scale(1.02);
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.default};
    position: relative;
    padding: 2px 4px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    &:hover {
      color: ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px) scale(1.05);
      text-shadow: none;
      box-shadow: 0 4px 8px rgba(0, 255, 0, 0.2);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: scaleX(0);
      transition: transform ${({ theme }) => theme.transitions.default};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
      opacity: 0;
    }

    &:hover::after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  button {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
    background: transparent;
    font-family: inherit;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: all ${({ theme }) => theme.transitions.default};
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150%;
      height: 150%;
      background: ${({ theme }) => theme.colors.secondary};
      transform: translate(-50%, -50%) scale(0);
      transition: transform ${({ theme }) => theme.transitions.slow};
      border-radius: 50%;
      z-index: -1;
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-2px);
      box-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary};
      text-shadow: none;
      border-color: transparent;
      
      &::before {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ${({ theme }) => theme.transitions.default} forwards;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${({ theme }) => theme.colors.glass.background};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      opacity: 0;
      transition: opacity ${({ theme }) => theme.transitions.default};
      z-index: -1;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    padding: 0 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: all ${({ theme }) => theme.transitions.default};
    
    &:hover {
      transform: scale(1.05);
      letter-spacing: 3px;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
    }
    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 30px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-50%);
    }
    &::before {
      left: -35px;
    }
    &::after {
      right: -35px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .section-title {
      font-size: 2rem;
    }
  }
`;