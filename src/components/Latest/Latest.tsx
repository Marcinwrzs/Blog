import Article from "components/Article/Article";
import * as Styled from "./Latest.styled";
import { useEffect, useState } from "react";
import { getLatetsPosts } from "api/handlers/services";
import { LatestPosts } from "api/handlers/types";
import { dotPulse } from "ldrs";
import UserPanel from "components/userPanel/UserPanel";
import { userIdentifier } from "context/UserContext";

const Latest = () => {
  const [latestPosts, setLatestPosts] = useState<LatestPosts[]>();

  dotPulse.register();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLatetsPosts();
        setLatestPosts(response as unknown as LatestPosts[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Styled.Wrapper>
      {localStorage.getItem(userIdentifier) && <UserPanel />}

      <Styled.Title>
        <h1>Latest post</h1>
      </Styled.Title>

      {latestPosts ? (
        latestPosts.map((item: LatestPosts) => (
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
