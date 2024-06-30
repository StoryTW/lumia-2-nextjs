'use client';
import React, { useRef } from 'react';
import styles from './SectionGlow.module.scss';
import { motion, useInView } from 'framer-motion';

const data = [
  {
    title: 'RWAs'
  },
  {
    title: 'Wallets'
  },
  {
    title: 'Orderbook DEXs'
  },
  {
    title: 'Liquidity Aggregators'
  },
  {
    title: 'AMM DEXs'
  },
  {
    title: 'Bridges'
  },
]

export const SectionGlow = () => {
  const refTitle = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.wrp}
        ref={refTitle}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.9 }}
        transition={{ duration: 1.5 }}
      >
        <div className={styles.main}>
          <h3 className={styles.title}>Grow your business</h3>
          <div className={styles.description}>
          With our cutting edge liquidity solutions
          </div>
        </div>
        <div className={styles.list}>
          {data.map((card, index) => {
            return (
              <div key={index} className={styles.card}>
                {card.title}
              </div>
            )
          })}
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
          <source src={'/video/2.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
