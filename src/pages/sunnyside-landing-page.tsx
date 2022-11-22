import Head from 'next/head';
import { Header } from '../components/sunnyside/Header';
import { Banner } from '../components/sunnyside/Banner';
import { Footer } from '../components/sunnyside/Footer';

export default function SunnysideLandingPage() {
  return (
    <>
      <Head>
        <title>Sunnyside | Frontend Mentor</title>
        <meta
          name="description"
          content="We are a full-service creative agency specializing in helping brands grow fast."
        />
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}
