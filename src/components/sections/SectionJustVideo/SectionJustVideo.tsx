'use client';
import React, { useRef } from 'react';
import styles from './SectionJustVideo.module.scss';

export const SectionJustVideo = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        <video
          // ref={videoRef}
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          muted
          playsInline
          loop
          autoPlay
        >
          <source src={'/video/14.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
