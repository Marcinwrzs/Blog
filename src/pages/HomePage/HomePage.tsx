import * as Styled from "./HomePage.Styled";
import Latest from "pages/latest/Latest";
import Popular from "pages/popular/Popular";
import Commented from "pages/commented/Commented";

const HomePage: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Latest />
      <Styled.Aside>
        <Popular />
        <Commented />
      </Styled.Aside>
    </Styled.Wrapper>
  );
};

export default HomePage;
