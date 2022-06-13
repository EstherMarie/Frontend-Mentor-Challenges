import Head from 'next/head';
import Card from '../components/Card';

export default function AdviceGeneratorApp() {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Advice generator app</title>
			</Head>
			<main>
				<div className="container">
					<Card
						number={114}
						text="It is easy to sit up and take notice, what's difficult is getting up and taking action."
					/>
				</div>
			</main>
		</>
	);
}
