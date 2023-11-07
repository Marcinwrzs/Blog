import Header from "components/header/Header";
import Pages from "components/pages/Pages";
import * as Styled from "./App.Styled";

const App: React.FC = () => {
  return (
    <Styled.AppWrapper>
      <Header />
      <Pages />
    </Styled.AppWrapper>
  );
};

export default App;
