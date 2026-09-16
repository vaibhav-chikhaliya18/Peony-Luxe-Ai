import { motion } from 'framer-motion';

/**
 * ImageReveal: Clean overflow reveal with subtle zoom-out effect
 */
export default function ImageReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
