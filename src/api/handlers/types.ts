export interface ArticleType {
  header: string;
  text: string;
  author: string;
  category: string;
  creationDate: string;
}

export interface LatestPostsType {
  id: number;
  attributes: {
    Header: string;
    Text: string;
    Author: string;
    Category: string;
    createdAt: string;
  };
}