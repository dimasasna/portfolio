import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  isVisible: boolean;
}

// Generate random glitch slices
const generateSlices = () =>
  Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: Math.random() * 90,
    height: Math.random() * 8 + 1,
    xOffset: (Math.random() - 0.5) * 40,
    delay: Math.random() * 0.3,
    duration: Math.random() * 0.15 + 0.08,
  }));

const PageTransition = ({ isVisible }: PageTransitionProps) => {
  const [slices, setSlices] = useState(generateSlices());
  const [tick, setTick] = useState(0);

  // Re-randomize slices saat glitch aktif untuk efek flicker
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setSlices(generateSlices());
      setTick(t => t + 1);
    }, 120);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
        >
          {/* ── Base layer hitam ── */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1, transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ scaleY: 0, originY: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }}
          />

          {/* ── RGB Split — layer merah (channel R) ── */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: '#ff0000', mixBlendMode: 'screen', opacity: 0.15 }}
            animate={{
              x: [0, -8, 12, -4, 8, 0, -12, 6, 0],
              opacity: [0, 0.15, 0.2, 0.1, 0.18, 0.05, 0.2, 0.12, 0],
              transition: { duration: 0.8, repeat: Infinity, repeatType: 'mirror', ease: 'linear' },
            }}
          />

          {/* ── RGB Split — layer biru (channel B) ── */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: '#0088ff', mixBlendMode: 'screen', opacity: 0.15 }}
            animate={{
              x: [0, 10, -6, 14, -8, 4, 0, -10, 0],
              opacity: [0, 0.12, 0.18, 0.08, 0.2, 0.06, 0.15, 0.1, 0],
              transition: { duration: 0.75, repeat: Infinity, repeatType: 'mirror', ease: 'linear', delay: 0.1 },
            }}
          />

          {/* ── Glitch slices — potongan konten bergeser ── */}
          {slices.map((slice) => (
            <motion.div
              key={`${slice.id}-${tick}`}
              className="absolute w-full bg-gray-900"
              style={{
                top: `${slice.top}%`,
                height: `${slice.height}%`,
              }}
              initial={{ x: 0, opacity: 0 }}
              animate={{
                x: [0, slice.xOffset, -slice.xOffset * 0.5, 0],
                opacity: [0, 0.9, 0.7, 0],
                transition: {
                  duration: slice.duration,
                  delay: slice.delay,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatDelay: Math.random() * 0.2,
                },
              }}
            />
          ))}

          {/* ── Scanline overlay ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              mixBlendMode: 'multiply',
            }}
            animate={{ opacity: [0.4, 0.8, 0.4, 1, 0.5], transition: { duration: 0.2, repeat: Infinity } }}
          />

          {/* ── Noise vignette ── */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)',
            }}
          />

          {/* ── Teks glitch di tengah (opsional, bisa dihapus) ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0, 1, 0, 1, 0], transition: { duration: 0.4, repeat: Infinity, repeatDelay: 0.1 } }}
          >
            <span
              className="text-green-400 font-mono text-sm tracking-[0.3em] uppercase select-none"
              style={{ textShadow: '2px 0 #ff0000, -2px 0 #0088ff' }}
            >
              Loading...
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;