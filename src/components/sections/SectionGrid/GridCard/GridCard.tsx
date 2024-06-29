import React, { FC } from 'react';
import styles from './GridCard.module.scss';

interface IGridCard {
  title: string;
  description: string;
}

export const GridCard: FC<IGridCard> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrp}>
        <div className={styles.content}></div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
