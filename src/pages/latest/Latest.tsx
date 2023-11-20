import Article from "pages/Article/Article";
import * as Styled from "./Latest.styled";
import { useEffect, useState } from "react";
import { getLatetsPosts } from "api/handlers/services";
import { ArticleType } from "api/handlers/types";

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

  const [latestPosts, setLatestPosts] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLatetsPosts(); // This is an array of ArticleType[]
        console.log(response);
        setLatestPosts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Styled.Wrapper>
      <h1>Latest post</h1>
      {latestPosts
        ? latestPosts.map(
            ({ id, date, Header, category, author }: ArticleType) => (
              <Article
                key={id}
                id={id}
                date={date}
                Header={Header}
                category={category}
                author={author}
              />
            )
          )
        : "Please wait"}
    </Styled.Wrapper>
  );
};

export default Latest;
