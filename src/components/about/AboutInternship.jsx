import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import internship images
import img1 from '../../assets/images/internship/image.png';
import img2 from '../../assets/images/internship/image copy.png';
import img3 from '../../assets/images/internship/image copy 2.png';
import img4 from '../../assets/images/internship/image copy 3.png';
import img5 from '../../assets/images/internship/image copy 4.png';
import img6 from '../../assets/images/internship/image copy 5.png';
import img7 from '../../assets/images/internship/image copy 6.png';
import img8 from '../../assets/images/internship/image copy 7.png';
import img9 from '../../assets/images/internship/image copy 8.png';
import img10 from '../../assets/images/internship/image copy 9.png';

const internshipImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

export default function AboutInternship({ itemVariants, aboutContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? internshipImages.length - imagesPerView : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === internshipImages.length - imagesPerView ? 0 : prevIndex + 1
    );
  };

  const visibleImages = internshipImages.slice(currentIndex, currentIndex + imagesPerView);

  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Internship Experience</h2>
      <div className="text-gray-700 space-y-4">
        {aboutContent.internship}
      </div>

      {/* Images Carousel */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Internship Gallery</h3>
        <div className="flex items-center justify-between gap-4">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="flex-shrink-0 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Images Row */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-4 justify-center">
              {visibleImages.map((image, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-64 h-64 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Internship experience ${currentIndex + index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="flex-shrink-0 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Image Counter */}
        <div className="flex justify-center mt-6 gap-2">
          {internshipImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(Math.max(0, Math.min(index, internshipImages.length - imagesPerView)))}
              className={`w-2 h-2 rounded-full transition-all ${
                index >= currentIndex && index < currentIndex + imagesPerView
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to image set ${Math.floor(index / imagesPerView) + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
