export interface ProjectInfo {
  id?: number | string;
  image: string;
  link: string;
  title: string;
  difficulty: 'Newbie' | 'Junior' | 'Intermediate' | 'Advanced' | 'Guru';
  description?: string;
  status: 'wip' | 'done'
}