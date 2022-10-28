import Head from 'next/head';
import type { GetStaticProps } from 'next';

import { HomeMain } from '../components/Home/MainSection';

import { getNotionProjects } from '../utils/getNotionPages';
import { NotionProjectProperties } from '../types/NotionPageObject';

interface HomeProps {
  projects: NotionProjectProperties[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name="description" content="Projects from Frontend Mentor" />
      </Head>

      <HomeMain projects={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getNotionProjects();

  return {
    props: {
      projects
    },
    revalidate: 86400 // 1 day in seconds
  };
};