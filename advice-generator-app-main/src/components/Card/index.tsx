import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  number: number;
  text: string;
}

export default function Card({ number, text }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.advice}>ADVICE #{number}</div>

      <p className={styles.quote}>"{text}"</p>

      <img src="/images/pattern-divider-mobile.svg" alt="" />

      <button type="submit" className={styles.btn}>
        <img src="/images/icon-dice.svg" alt="New Advice" />
      </button>
    </div>
  );
}
