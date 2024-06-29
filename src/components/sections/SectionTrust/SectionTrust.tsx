'use client';
import React, { useRef } from 'react';
import styles from './SectionTrust.module.scss';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export const SectionTrust = () => {
  const refTitle = useRef(null);

  const refCard = useRef(null);

  const inViewTitle = useInView(refTitle, {
    once: false,
  });

  const inViewCard = useInView(refCard, {
    once: false,
  });

  return (
    <section id='trust' className={styles.sectionTrust}>
      <div className={styles.wrp}>
        <motion.h2
          ref={refTitle}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: inViewTitle ? 1 : 0, scale: inViewTitle ? 1 : 0.9 }}
          transition={{ duration: 1.3 }}
        >
          Trusted by web3 businesses of all sizes
        </motion.h2>

        <motion.div
          ref={refCard}
          className={styles.card}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: inViewCard ? 1 : 0, scale: inViewCard ? 1 : 0.9 }}
          transition={{ duration: 1.5 }}
        >
          <div className={styles.comment}>
            “Lumia’s deCEX solution has transformed our liquidity, offering deep, reliable access to
            centralized exchanges while keeping our decentralized ethos. This partnership has
            boosted our prices, speed, and leadership in the DEX space. We're thrilled to innovate
            the future of finance with Lumia.”
          </div>

          <Image src={'/1inch.svg'} width={117} height={55} alt='1inch' quality={100} priority />
        </motion.div>
      </div>
    </section>
  );
};
