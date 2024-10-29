export interface BlogItem {
  id: number;
  title: string;
  description: string;
}

export interface BlogStateModel {
  items: BlogItem[];
}
