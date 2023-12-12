import Header from "layout/header/Header";
import * as Styled from "./App.Styled";
import { BrowserRouter } from "react-router-dom";
import Pages from "layout/routes/Routing";
import { TokenContextController } from "context/UserContext";

const App = () => {
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
