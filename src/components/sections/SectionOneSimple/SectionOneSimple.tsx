'use client'
import React, { useRef } from 'react';
import styles from './SectionOneSimple.module.scss';
import { motion, useInView } from 'framer-motion';

export const SectionOneSimple = () => {
  const refTitle = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  return (
    <section id='oneSimple' className={styles.section}>
      <motion.div 
        className={styles.wrp} 
        ref={refTitle}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.9 }}
        transition={{ duration: 1.5 }}
        >
        <h3 className={styles.title}>One simple price</h3>
        <div className={styles.description}>
          Elevate your liquidity today No tiers, no fixed prices, just a simple fee
        </div>
      </motion.div>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          muted
          playsInline
          loop
          autoPlay
        >
          <source src={'/video/15.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
