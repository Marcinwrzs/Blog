import * as Styled from "./Article.Styled";
import { ArticleType } from "api/handlers/types";

const Article = ({
  header,
  text,
  author,
  category,
  creationDate,
}: ArticleType) => {
  const date = new Date(creationDate);

  const fullDate =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

  return (
    <Styled.Article>
      <p>{category}</p>
      <h1>{header}</h1>
      <p>
        Posted on {fullDate} by <span>{author}</span>
      </p>
      <p>
        {text.slice(0, 250)}
        {"..."}
      </p>
      <Styled.Button>View article</Styled.Button>
    </Styled.Article>
  );
};

export default Article;
