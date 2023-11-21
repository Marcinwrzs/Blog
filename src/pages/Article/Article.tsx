import * as Styled from "./Article.Styled";
import { ArticleType } from "api/handlers/types";

const Article = ({
  header,
  text,
  author,
  category,
  creationDate,
}: ArticleType) => {
  return (
    <Styled.Article>
      <p>{category}</p>
      <h1>{header}</h1>
      <p>
        Posted on {creationDate.slice(0, 10)} by <span>{author}</span>
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
