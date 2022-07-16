import Head from 'next/head';
import Card from '../components/adviceGenerator/Card';

export default function AdviceGeneratorApp() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <meta
          name='description'
          content='Get random quotes of advice with this advice generator app!'
        />
      </Head>
      <Card />
    </>
  );
}
