import { motion } from 'framer-motion';
import { easeOut, easeIn } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  pageName: string;
}

const PageWrapper = ({ children, pageName }: PageWrapperProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.3,
        ease: easeIn,
      },
    },
  };

  return (
    <motion.div key={pageName} variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

export default PageWrapper;
