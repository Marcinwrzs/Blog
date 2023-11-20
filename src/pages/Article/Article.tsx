import * as Styled from "./Article.Styled";
import { ArticleType } from "api/handlers/types";

const Article = (props: ArticleType) => {
  const { id, date, Header, category, author } = props;

  return (
    <Styled.Article key={id}>
      {id}
      <p>{category}</p>
      <h1>{Header}</h1>
      <p>
        {/* Posted on {date.getDate()}.{date.getMonth() + 1} by{" "} */}
        <span>{author}</span>
      </p>
      <Styled.Button>View article</Styled.Button>
    </Styled.Article>
  );
};

export default Article;
