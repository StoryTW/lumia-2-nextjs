'use client';
import React, { FC, useRef } from 'react';
import styles from './GridCard.module.scss';
import { motion, useInView } from 'framer-motion';

interface IGridCard {
  title: string;
  description: string;
  video: string;
}

export const GridCard: FC<IGridCard> = ({ title, description, video }) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.wrp}>
        <div className={styles.content}>
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
            <source src={`/video/${video}.mp4`} type='video/mp4' />
          </video>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
      </div>
    </motion.div>
  );
};
