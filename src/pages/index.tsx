import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>Frontend Mentor Challenges</title>
				<meta name="description" content="Projects from Frontend Mentor" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
			</Head>

			<main>
				<h1 className="sr-only">Frontend Mentor Challenges</h1>
				<ul>
					<li>
						<Link href="/advice-generator-app">
							<a>Advice Generator App</a>
						</Link>
					</li>
				</ul>
			</main>
		</div>
	);
};

export default Home;
