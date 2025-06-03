import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import ScrollProgress from './components/ScrollProgress';
import Timeline from './components/Timeline';
import CVSection from './components/CVSection';
import SkillsSection from './components/SkillBar';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DripMart - Fashion E-Commerce',
    description: 'A modern e-commerce platform for trendy clothing with user authentication, shopping cart functionality, and a sleek user interface. Features include product filtering, secure checkout, and responsive design for optimal shopping experience.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Auth', 'Tailwind CSS'],
    github: 'https://github.com/Ganeshh2005/DripMart',
    demo: 'https://dripmart-demo.com',
  },
  {
    title: 'MediPredict - Lung Cancer Detection',
    description: 'An advanced machine learning application for lung cancer prediction using Python and Streamlit. Utilizes sklearn for model training, matplotlib for data visualization, and provides an intuitive interface for medical professionals.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Matplotlib', 'Pandas', 'NumPy'],
    github: 'https://github.com/Ganeshh2005/Lung-Cancer-Prediction-using-Python-and-ML',
    demo: 'https://lungcancerpredictionusingpythonandml-ganeshhs-projects.vercel.app',
  },
  {
    title: 'ZevZone - Mental Fitness & Wellness App',
    description: 'A comprehensive mental health platform featuring guided breathing exercises, meditation sessions, mood tracking, community forums, and therapist directory. Includes interactive chatbot support and relaxing games for stress relief.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
    github: 'https://github.com/Ganeshh2005/Mental-Fitness-and-Wellbeing-App---ZevZone',
    demo: 'https://zevzone-demo.com',
  },
  {
    title: 'Weather App',
    description: 'Interactive weather application with real-time data, map visualization, and comprehensive weather information. Features city-based search, current conditions display, and responsive design across devices.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Leaflet', 'Weather API'],
    github: 'https://github.com/Ganeshh2005/WeatherApp',
    demo: 'https://weather-app-tau-olive.vercel.app',
  },
];

const hackathons = [
  {
    title: 'Smart India Hackathon',
    description: 'Participated in Smart India Hackathon, working on innovative solutions for real-world problems.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['Problem Solving', 'Innovation', 'Team Collaboration'],
  },
  {
    title: 'HackSpark Hackathon',
    description: 'Developed creative solutions during the HackSpark hackathon, focusing on technological innovation.',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['Innovation', 'Rapid Development', 'Team Work'],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-black min-h-screen">
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="skills" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  My expertise and proficiency levels
                </p>
              </div>
              <SkillsSection />
            </div>
          </section>

          <section id="experience">
            <Timeline />
          </section>

          <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Showcasing my recent work and innovations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>

              <div className="mt-20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Hackathon Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {hackathons.map((hackathon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={hackathon.image}
                          alt={hackathon.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {hackathon.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {hackathon.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="publications" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Publications
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Research contributions and academic publications
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Revolutionizing Content Creation with AI: A Study on Automated Writing, Text Processing and Media Generation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Published in International Journal of Engineering Research & Technology (IJERT) · March 28, 2025
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      A comprehensive study exploring how Artificial Intelligence is transforming content creation, from automated writing and text processing to AI-driven media generation. The research examines cutting-edge tools, their industry impact, and ethical considerations surrounding AI-generated content.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>AI-powered writing assistants & their accuracy</li>
                        <li>Advanced text processing techniques</li>
                        <li>AI-driven image & video generation</li>
                        <li>Ethical challenges in AI-generated content</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://www.ijert.org/revolutionizing-content-creation-with-ai-a-study-on-automated-writing-text-processing-and-media-generation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                      >
                        Read Full Paper
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="achievements" className="py-20 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Achievements
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Recent awards and recognition
                </p>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {/* D-Beyond Victory */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      🏆 Winner at D-Beyond UI/UX Competition - Technofest 2025
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">March 2025</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Thakur Polytechnic | Prize: ₹5000
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Led a team to victory in the UI/UX competition hosted by Horizon View and sponsored by LIVTECH.CA. Developed YoClub!, an innovative manga/comic reader app featuring:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li>Genre-based community engagement</li>
                      <li>AI-driven recommendations</li>
                      <li>Minimalistic design approach</li>
                      <li>Interactive reading experience</li>
                    </ul>
                    <div className="pt-2">
                      <a
                        href="https://lnkd.in/d2bCwDTK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View Figma Design →
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Techknowevent Victory */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      🥈 First Runner-up at Techknowevent 2024
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Bhausaheb Vartak Polytechnic | State-level Technical Paper Presentation
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      Secured first place in the state-level technical paper presentation competition with research on "The Use of AI Against Data Privacy and Security". The presentation focused on:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li>Ethical AI development considerations</li>
                      <li>Data privacy challenges in AI systems</li>
                      <li>Cybersecurity awareness</li>
                      <li>Practical security implementations</li>
                    </ul>
                  </div>
            </motion.div>
              </div>
            </div>
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <CVSection />

          <section id="contact" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Have a question or want to work together?
                </p>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Ganesh Lagad
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A passionate full-stack developer specializing in modern web technologies.
                  Creating innovative solutions with a focus on user experience and performance.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Ganeshh2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ganesh-lagad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:ganeshlagad2005@gmail.com"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Email</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#publications" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Publications
                    </a>
                  </li>
                  <li>
                    <a href="#achievements" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      Achievements
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Email:</span> ganeshlagad2005@gmail.com
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Phone:</span> +91 9324522688
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Location:</span> Mumbai, Maharashtra, India
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-400 dark:text-gray-500">
                © {new Date().getFullYear()} Ganesh Lagad. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;