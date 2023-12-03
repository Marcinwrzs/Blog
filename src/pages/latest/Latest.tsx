import Article from "pages/Article/Article";
import * as Styled from "./Latest.styled";
import { useEffect, useState } from "react";
import { getLatetsPosts } from "api/handlers/services";
import { LatestPostsType } from "api/handlers/types";
import { dotPulse } from "ldrs";

const Latest: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<any>();

  dotPulse.register();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLatetsPosts();
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
      {latestPosts ? (
        latestPosts.map((item: LatestPostsType) => (
          <Article
            key={item.id}
            header={item.attributes.Header}
            text={item.attributes.Text}
            author={item.attributes.Author}
            category={item.attributes.Category}
            creationDate={item.attributes.createdAt}
          ></Article>
        ))
      ) : (
        <Styled.LoadingAnimation>
          <l-dot-pulse size="93" speed="1.3" color="black"></l-dot-pulse>
        </Styled.LoadingAnimation>
      )}
    </Styled.Wrapper>
  );
};

export default Latest;
