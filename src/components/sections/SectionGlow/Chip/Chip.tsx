import React, { FC } from 'react';
import styles from './Chip.module.scss';
import clsx from 'clsx';

interface IChip {
  name: string;
  className?: string;
  reverse?: boolean;
}

export const Chip: FC<IChip> = ({ name, className, reverse = false }) => {
  return (
    <div className={clsx(styles.chip, className)}>
      <div
        className={clsx(styles.wrp, {
          [styles.reverse]: reverse,
        })}
      >
        <div className={styles.circle}>
          <div className={styles.dot} />
        </div>
        <div className={styles.divider} />
        <div className={styles.btn}>{name}</div>
      </div>
    </div>
  );
};
