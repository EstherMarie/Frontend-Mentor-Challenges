import Head from 'next/head';
import { Header } from '../components/sunnyside/Header';
import { Banner } from '../components/sunnyside/Banner';
import { Grid } from '../components/sunnyside/Grid';
import { Testimonials } from '../components/sunnyside/Testimonials';
import { DisplayImages } from '../components/sunnyside/DisplayImages';
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
        <Grid />
        <Testimonials />
        <DisplayImages />
      </main>
      <Footer />
    </>
  );
}
