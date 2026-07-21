import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import me1 from '../../assets/images/about_gallery/me1.jpg';
import me2 from '../../assets/images/about_gallery/me2.png';
import me3 from '../../assets/images/about_gallery/me3.png';
import me4 from '../../assets/images/about_gallery/me4.png';
import me5 from '../../assets/images/about_gallery/me5.png';
import me6 from '../../assets/images/about_gallery/me6.png';
import me7 from '../../assets/images/about_gallery/me7.png';
import me8 from '../../assets/images/about_gallery/me8.png';

const galleryImages = [
  { src: me1, alt: 'Personal photo 1', rotate: 'rotate-2' },
  { src: me2, alt: 'Personal photo 2', rotate: '-rotate-3' },
  { src: me3, alt: 'Personal photo 3', rotate: 'rotate-1' },
  { src: me4, alt: 'Personal photo 4', rotate: '-rotate-2' },
  { src: me5, alt: 'Personal photo 5', rotate: 'rotate-3' },
  { src: me6, alt: 'Personal photo 6', rotate: '-rotate-1' },
  { src: me7, alt: 'Personal photo 7', rotate: 'rotate-2' },
  { src: me8, alt: 'Personal photo 8', rotate: '-rotate-3' },
];

function GalleryImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/5] bg-bg-secondary overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
          Failed to load
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export default function AboutGallery({ itemVariants }) {
  const marqueeRef = useRef(null);

  const pauseMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'paused';
  };

  const resumeMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'running';
  };

  return (
    <motion.div variants={itemVariants} className="mb-20">
      <div className="text-center mb-12">
        <h2 className="editorial-section-title">Captured Frames</h2>
        <div className="h-px w-24 bg-accent/40 mx-auto" />
      </div>

      <div className="group flex overflow-hidden py-8">
        <div ref={marqueeRef} className="gallery-marquee flex whitespace-nowrap py-4 gap-8 group-hover:[animation-play-state:paused]">
          <div className="flex items-center gap-8">
            {galleryImages.map((img, i) => (
              <div
                key={`set1-${i}`}
                className={`stamp-frame w-64 flex-shrink-0 bg-bg-secondary p-1.5 ${img.rotate}`}
                onMouseEnter={pauseMarquee}
                onMouseLeave={resumeMarquee}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8">
            {galleryImages.map((img, i) => (
              <div
                key={`set2-${i}`}
                className={`stamp-frame w-64 flex-shrink-0 bg-bg-secondary p-1.5 ${img.rotate}`}
                onMouseEnter={pauseMarquee}
                onMouseLeave={resumeMarquee}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
