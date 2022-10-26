import { notion } from '../services/notion';

export async function getNotionPages() {
  const databaseId = process.env.DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId!,
    sorts: [
      {
        property: 'Project_Id',
        direction: 'ascending',
      },
    ],
  });
  const data = response.results;

  return data;
}
