import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';

interface CardProps {
	number: number;
	text: string;
}

export default function Card({ number, text }: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.advice}>ADVICE #{number}</div>

			<p className={styles.quote}>{text}</p>

			<button type="submit" className={styles.btn}>
				<Image src="/advice-generator/images/icon-dice.svg" alt="New Advice" width={24} height={24} />
			</button>
		</div>
	);
}
