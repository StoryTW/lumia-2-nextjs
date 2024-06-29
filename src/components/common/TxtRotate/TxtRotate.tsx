import React, { useState, useEffect } from 'react';
import styles from './TxtRotate.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const textArray = ['Superior UX', 'Faster deployment', 'Best Prices'];

const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: '0%',
    opacity: 1,
  },
  exit: {
    y: '-100%',
    opacity: 0,
  },
};

export const TxtRotate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <AnimatePresence mode='wait'>
        <motion.span
          key={index}
          variants={animate}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{ duration: 0.5 }}
          className={styles.text}
        >
          {textArray[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
