/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name='description' content='Projects from Frontend Mentor' />
      </Head>

      <main>
        <h1>Frontend Mentor Challenges</h1>
        <ul>
          <li>
            <Link href='/advice-generator-app'>
              <a>Advice Generator App</a>
            </Link>
            <Link href='/easybank-landing-page'>
              <a>Easybank Landing Page</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
