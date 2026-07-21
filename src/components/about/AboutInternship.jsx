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
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">Internship Experience</h2>
      <div className="editorial-content">
        {aboutContent.internship}
      </div>

      <div className="mt-10">
        <h3 className="mb-6 font-display text-2xl font-medium text-text">Internship Gallery</h3>
        <div className="flex items-center justify-between gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handlePrev}
            className="flex-shrink-0 rounded-sm border border-border p-3 text-accent transition-colors duration-300 hover:border-accent/50 hover:bg-card"
            aria-label="Previous images"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </motion.button>

          <div className="flex-1 overflow-hidden">
            <div className="flex justify-center gap-4">
              {visibleImages.map((image, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-56 w-56 flex-shrink-0 overflow-hidden rounded-sm border border-border shadow-[0_16px_40px_rgba(0,0,0,0.3)] sm:h-64 sm:w-64"
                >
                  <img
                    src={image}
                    alt={`Internship experience ${currentIndex + index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleNext}
            className="flex-shrink-0 rounded-sm border border-border p-3 text-accent transition-colors duration-300 hover:border-accent/50 hover:bg-card"
            aria-label="Next images"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </motion.button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {internshipImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(Math.max(0, Math.min(index, internshipImages.length - imagesPerView)))}
              className={`h-1 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + imagesPerView
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-muted/50'
              }`}
              aria-label={`Go to image set ${Math.floor(index / imagesPerView) + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
