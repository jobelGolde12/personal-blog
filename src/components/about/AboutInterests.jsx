import { motion } from 'framer-motion';
import outingVideo from '../../assets/videos/outing_video.mp4';

export default function AboutInterests({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">Interests</h2>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="editorial-content lg:w-1/2">
          {aboutContent.interests}
        </div>
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-sm border border-border shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <video
              className="aspect-video h-full w-full object-cover"
              src={outingVideo}
              controls
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
