'use client';
import React, { useRef } from 'react';
import styles from './SectionGlow.module.scss';
import { motion, useInView } from 'framer-motion';
import { Chip } from './Chip/Chip';

const data = [
  {
    title: 'RWAs',
  },
  {
    title: 'Wallets',
  },
  {
    title: 'Orderbook DEXs',
  },
  {
    title: 'Liquidity Aggregators',
  },
  {
    title: 'AMM DEXs',
  },
  {
    title: 'Bridges',
  },
];

export const SectionGlow = () => {
  const refTitle = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <motion.div
          className={styles.main}
          ref={refTitle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.9 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className={styles.title}>Grow your business</h3>
          <div className={styles.description}>With our cutting edge liquidity solutions</div>
        </motion.div>
        <div className={styles.list}>
          {data.map((card, index) => {
            return (
              <div key={index} className={styles.card}>
                {card.title}
              </div>
            );
          })}
        </div>
        <Chip name='RWAs' className={styles.rwas} reverse />
        <Chip name='AMM DEXs' className={styles.amm} reverse />
        <Chip name='Orderbook DEXs' className={styles.order} reverse />
        <Chip name='Wallets' className={styles.wallet} />
        <Chip name='Liquidity Aggregators' className={styles.liquid} />
        <Chip name='Bridges' className={styles.bridge} />
      </div>
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
