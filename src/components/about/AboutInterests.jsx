import { motion } from 'framer-motion';
import outingVideo from '../../assets/videos/outing_video.mp4';

export default function AboutInterests({ itemVariants, aboutContent }) {
  return (
    <motion.div variants={itemVariants} className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Interests</h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="text-gray-700 space-y-4 lg:w-1/2">
          {aboutContent.interests}
        </div>
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <video
              className="w-full h-full object-cover aspect-video"
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
