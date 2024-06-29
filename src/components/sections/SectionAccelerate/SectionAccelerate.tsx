'use client';
import React, { Fragment, useRef } from 'react';
import styles from './SectionAccelerate.module.scss';
import { motion, useInView } from 'framer-motion';

const data = [
  {
    title: 'Low Code',
  },
  {
    title: 'Ship quickly',
  },
  {
    title: 'Easy to use',
  },
];

export const SectionAccelerate = () => {
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
        <h3 className={styles.title}>Accelerate your RWA tokenization projects</h3>
        <div className={styles.list}>
          {data.map((card, index) => {
            return (
              <Fragment key={index}>
                <div className={styles.card}>{card.title}</div>
                {index < 2 && <div className={styles.divider} />}
              </Fragment>
            );
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
          <source src={'/video/7.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
