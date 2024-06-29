'use client';
import React, { FC, useRef } from 'react';
import styles from './SectionOne.module.scss';
import { TxtRotate } from '@/components/common/TxtRotate/TxtRotate';

export const SectionOne: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={styles.mainSection} id='one'>
      <div className={styles.wrp}>
        <div className={styles.info}>
          <h1 className={styles.title}>The liquidity layer of Web3</h1>
          <TxtRotate />
        </div>
      </div>

      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          preload='metadata'
          width={'100%'}
          height={'100%'}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={'/video/1.mp4'} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};
