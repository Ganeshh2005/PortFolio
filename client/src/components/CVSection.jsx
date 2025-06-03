import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';

const CVSection = () => {
  const handleDownload = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/Ganesh_Lagad_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Ganesh_Lagad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/Ganesh_Lagad_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Download or view my detailed CV
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-lg mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg flex items-center justify-center gap-3 transition-colors"
          >
            <FiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleView}
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-lg flex items-center justify-center gap-3 transition-colors"
          >
            <FiEye className="w-5 h-5" />
            <span>View CV</span>
          </motion.button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: March 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVSection; 