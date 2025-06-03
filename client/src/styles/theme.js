export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#808080',
    background: '#FFFFFF',
    backgroundGlass: 'rgba(255, 255, 255, 0.9)',
    text: '#000000',
    lightText: '#404040',
    border: 'rgba(0, 0, 0, 0.3)',
    gradientPrimary: 'linear-gradient(135deg, #000000 0%, #404040 100%)',
    gradientSecondary: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)',
    glass: {
      background: 'rgba(255, 255, 255, 0.95)',
      border: 'rgba(0, 0, 0, 0.12)',
      shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'}
  },
  fonts: {
    primary: '"Inter", sans-serif',
    heading: '"Poppins", sans-serif'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  transitions: {
    default: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px'
  }
};