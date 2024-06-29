'use client';
import React, { useRef } from 'react';
import styles from './SectionDaCex.module.scss';
import { motion, useInView } from 'framer-motion';

export const SectionDaCex = () => {
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
        <h3 className={styles.title}>Why deCEX liquidity?</h3>
        <div className={styles.description}>
          Empower your dApp with Lumia’s deCEX liquidity — the power of centralized exchanges, now
          decentralized. Offer your users vast choices, optimal pricing, and unbeatable security.
          Market depth without compromises.
          <br />
          Liquidity, elevated.
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
          <source src={'/video/3.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
