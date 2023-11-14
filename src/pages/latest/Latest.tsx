import Article from "pages/Article/Article";
import * as Styled from "./Latest.styled";

const Latest: React.FC = () => {
  const posts = [
    {
      id: 0,
      title: "Lorem 1",
      date: new Date(),
      author: "John",
      category: "General",
    },
    {
      id: 1,
      title: "Lorem 2",
      date: new Date(),
      author: "John",
      category: "General",
    },
    {
      id: 2,
      title: "Lorem 3",
      date: new Date(),
      author: "John",
      category: "General",
    },
    {
      id: 3,
      title: "Lorem 4",
      date: new Date(),
      author: "John",
      category: "General",
    },
  ];

  return (
    <Styled.Wrapper>
      <h1>Latest post</h1>
      {posts.map(({ id, date, title, category, author }) => (
        <Article
          key={id}
          id={id}
          date={date}
          title={title}
          category={category}
          author={author}
        />
      ))}
    </Styled.Wrapper>
  );
};

export default Latest;
