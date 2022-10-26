import Head from 'next/head';
import type { GetStaticProps } from 'next';

import { HomeMain } from '../components/Home/MainSection';

import { getNotionPages } from '../utils/getNotionPages';
import { NotionDatabaseObject } from '../types/NotionPageObject';

interface HomeProps {
  projects: NotionDatabaseObject[];
}

export default function Home({ projects }: HomeProps) {
  const projectsProperties = projects.map((project) => {
    return project.properties;
  });

  const filteredProjects = projectsProperties.map(({ Project_Id, Description, Difficulty, Image, Path, Status, Title }) => {
    const projectObject = { Project_Id, Description, Difficulty, Image, Path, Status, Title };

    return projectObject;
  });

  console.log(filteredProjects);

  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name="description" content="Projects from Frontend Mentor" />
      </Head>

      <HomeMain />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getNotionPages();

  return {
    props: {
      projects
    },
    revalidate: 86400 // 1 day in seconds
  };
};