export interface NotionDatabaseObject {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: null | undefined;
  icon: null | undefined;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: DatabaseObjectProperties;
  url: string;
}

interface DatabaseObjectProperties {
  Description: {
    id: string;
    type: 'rich_text';
    rich_text: [];
  };
  Status: {
    id: string;
    type: 'select';
    select: {
      id: string;
      name: 'done' | 'wip';
      color: 'green' | 'yellow';
    };
  };
  Difficulty: {
    id: string;
    type: 'select';
    select: {
      id: string;
      name: 'Newbie' | 'Junior' | 'Intermediate' | 'Advanced' | 'Guru';
      color: 'blue' | 'green' | 'yellow' | 'orange' | 'red';
    };
  };
  Project_Id: {
    id: string;
    type: 'number';
    number: number;
  };
  Image: {
    id: string;
    type: 'files';
    files: [
      {
        name: string;
        type: 'external';
        external: {
          url: string;
        };
      },
    ];
  };
  Path: {
    id: string;
    type: 'rich_text';
    rich_text: [
      {
        type: 'text';
        text: {
          content: string;
          link: null | undefined;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: null | undefined;
      },
    ];
  };
  Title: {
    id: string;
    type: 'title';
    title: [
      {
        type: 'text';
        text: {
          content: string;
          link: null | undefined;
        };
        annotations: {
          bold: boolean;
          italic: boolean;
          strikethrough: boolean;
          underline: boolean;
          code: boolean;
          color: string;
        };
        plain_text: string;
        href: null | undefined;
      },
    ];
  };
}
