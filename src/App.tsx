import Header from "layout/header/Header";
import { BrowserRouter } from "react-router-dom";
import Pages from "layout/routes/Routing";
import { TokenContextController } from "context/UserContext";

const App = () => {
  return (
    <TokenContextController>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </TokenContextController>
  );
};

export default App;
