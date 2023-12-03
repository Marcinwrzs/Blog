import Header from "components/header/Header";
import * as Styled from "./App.Styled";
import { BrowserRouter } from "react-router-dom";
import Pages from "components/pages/Pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Styled.AppWrapper>
        <Header />
        <Pages />
      </Styled.AppWrapper>
    </BrowserRouter>
  );
};

export default App;
