import { notion } from '../services/notion';
import { NotionDatabaseObject } from '../types/NotionPageObject';

export async function getNotionProjects() {
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
  const data = response.results as NotionDatabaseObject[];

  return data
          .map((notionPages) => notionPages.properties)
          .map((property) => {
            return {
              title: property.Title.title[0].plain_text || null,
              status: property.Status.select.name || null,
              difficulty: property.Difficulty.select.name || null,
              image: property.Image.files[0].name || null,
              path: property.Path.rich_text[0].text.content || null
            }
          })
}
