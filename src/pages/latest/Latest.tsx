import Article from "pages/Article/Article";
import * as Styled from "./Latest.styled";
import { useEffect, useState } from "react";
import { getLatetsPosts } from "api/handlers/services";
import { ArticleType } from "api/handlers/types";

const Latest: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLatetsPosts();
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
        ? latestPosts.map((item: any) => (
            <Article
              key={item.id}
              header={item.attributes.Header}
              text={item.attributes.Text}
              author={item.attributes.Author}
              category={item.attributes.Category}
              creationDate={item.attributes.createdAt}
            ></Article>
          ))
        : "Please wait"}
    </Styled.Wrapper>
  );
};

export default Latest;
