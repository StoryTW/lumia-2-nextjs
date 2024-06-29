'use client';
import { Video } from '@/components/common/Video/Video';
import { motion, useInView } from 'framer-motion';
import React, { FC, useRef } from 'react';
import styles from './SectionApi.module.scss';
import { Divider } from '@/components/common/Divider/Divider';

interface ISectionApi {
  id: string;
  title: string;
  description: string;
  video: string;
}

export const SectionApi: FC<ISectionApi> = ({ id, title, description, video }) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
  });

  return (
    <section className={styles.sectionApi} id={id}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{ duration: 1.5 }}
        className={styles.wrp}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </motion.div>
      <Divider />
      <Video src={`/video/${video}.mp4`} />
    </section>
  );
};
