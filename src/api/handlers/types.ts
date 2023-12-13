export interface ArticlePayload {
  header: string;
  text: string;
  author: string;
  category: string;
  creationDate: string;
}
export interface UserData {
  user: {
    username: string;
  };
  jwt: string;
}

export interface LatestPosts {
  id: number;
  attributes: {
    Header: string;
    Text: string;
    Author: string;
    Category: string;
    createdAt: string;
  };
}

export type StrapiResponse<Data> = { data: Data };