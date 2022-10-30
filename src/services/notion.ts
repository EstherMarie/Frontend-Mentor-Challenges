import { Client, LogLevel } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
});
