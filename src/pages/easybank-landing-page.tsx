import Head from 'next/head';
import { Banner } from '../components/easybank/Banner';
import { Header } from '../components/easybank/Header';
import { WhyEasybank } from '../components/easybank/WhyEasybank';

export default function EasybankLandingPage() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Easybank landing page</title>
        <meta
          name="description"
          content="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
        />
      </Head>
      <Header />
      <main>
        <Banner />
        <WhyEasybank />
      </main>
    </>
  );
}
