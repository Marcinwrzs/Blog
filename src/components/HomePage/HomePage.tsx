import * as Styled from "./HomePage.Styled";
import Latest from "components/Latest/Latest";
import Popular from "components/Popular/Popular";
import Commented from "components/Commented/Commented";

const HomePage = () => {
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
