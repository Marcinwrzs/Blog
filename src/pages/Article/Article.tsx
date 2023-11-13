import * as Styled from "./Article.Styled";

interface ArticleProps {
  id: number;
  date: Date;
  title: string;
  category: string;
  author: string;
}

const Article = (props: ArticleProps) => {
  const { id, date, title, category, author } = props;

  return (
    <Styled.Article key={id}>
      <p>{category}</p>
      <h1>{title}</h1>
      <p>
        Posted on {date.getDate()}.{date.getMonth() + 1} by{" "}
        <span>{author}</span>
      </p>
      <Styled.Button>View article</Styled.Button>
    </Styled.Article>
  );
};

export default Article;
