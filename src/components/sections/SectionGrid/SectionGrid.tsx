import React from 'react';
import styles from './SectionGrid.module.scss';
import { GridCard } from './GridCard/GridCard';

const data = [
  {
    video: '8',
    title: 'Deep Multi-CEX Liquidity',
    description: 'Aggregate liquidity from multiple centralized exchanges.',
  },
  {
    video: '9',
    title: 'Trustless & Non-Custodial',
    description: 'Maintain full control over your assets.',
  },
  {
    video: '10',
    title: 'Gasless, Signature-Based Trading UX',
    description: 'Streamline transactions without gas fees.',
  },
  {
    video: '11',
    title: 'Ultra Fast & Reliable Price Feeds',
    description: 'Ensure accurate and timely valuations.',
  },
  {
    video: '12',
    title: 'Capital Efficient & Delta Neutral',
    description: 'Optimize yield safely.',
  },
  {
    video: '13',
    title: 'Secure by Design',
    description: 'Protect RWA assets with robust security features.',
  },
];

export const SectionGrid = () => {
  return (
    <section id='gridSection' className={styles.sectionGrid}>
      <div className={styles.wrapper}>
        {data.map((card, index) => {
          return (
            <GridCard
              key={index}
              title={card.title}
              description={card.description}
              video={card.video}
            />
          );
        })}
      </div>
    </section>
  );
};
