import Head from 'next/head';
import { Header } from '../components/easybank/Header';

export default function EasybankLandingPage() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Easybank landing page</title>
        <meta
          name='description'
          content='Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'
        />
      </Head>
      <Header />
    </>
  );
}
