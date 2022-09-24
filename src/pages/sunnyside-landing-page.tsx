import Head from 'next/head';
import { Header } from '../components/sunnyside/Header';

export default function SunnysideLandingPage() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Sunnyside landing page</title>
        <meta
          name="description"
          content="We are a full-service creative agency specializing in helping brands grow fast."
        />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}
