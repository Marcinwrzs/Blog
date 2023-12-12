import Header from "components/header/Header";
import * as Styled from "./App.Styled";
import { BrowserRouter } from "react-router-dom";
import Pages from "components/pages/Pages";
import { TokenContextController } from "context/UserContext";

const App: React.FC = () => {
  return (
    <TokenContextController>
      <BrowserRouter>
        <Styled.AppWrapper>
          <Header />
          <Pages />
        </Styled.AppWrapper>
      </BrowserRouter>
    </TokenContextController>
  );
};

export default App;
