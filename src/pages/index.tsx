/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeMain } from '../components/Home/MainSection';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name="description" content="Projects from Frontend Mentor" />
      </Head>

      <HomeMain />
    </div>
  );
};

export default Home;
