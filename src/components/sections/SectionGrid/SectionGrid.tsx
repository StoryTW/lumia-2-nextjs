import React from 'react';
import styles from './SectionGrid.module.scss';
import { GridCard } from './GridCard/GridCard';

const data = [
  {
    content: <></>,
    title: 'Deep Multi-CEX Liquidity',
    description: 'Aggregate liquidity from multiple centralized exchanges.',
  },
  {
    content: <></>,
    title: 'Trustless & Non-Custodial',
    description: 'Maintain full control over your assets.',
  },
  {
    content: <></>,
    title: 'Gasless, Signature-Based Trading UX',
    description: 'Streamline transactions without gas fees.',
  },
  {
    content: <></>,
    title: 'Ultra Fast & Reliable Price Feeds',
    description: 'Ensure accurate and timely valuations.',
  },
  {
    content: <></>,
    title: 'Capital Efficient & Delta Neutral',
    description: 'Optimize yield safely.',
  },
  {
    content: <></>,
    title: 'Secure by Design',
    description: 'Protect RWA assets with robust security features.',
  },
];

export const SectionGrid = () => {
  return (
    <section id='gridSection' className={styles.sectionGrid}>
      <div className={styles.wrapper}>
        {data.map((card, index) => {
          return <GridCard key={index} title={card.title} description={card.description} />;
        })}
      </div>
    </section>
  );
};
