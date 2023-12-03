import * as Styled from "./HomePage.Styled";
import Latest from "pages/Latest/Latest";
import Popular from "pages/Popular/Popular";
import Commented from "pages/Commented/Commented";

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
