import Header from "layout/header/Header";
import Routing from "layout/routes/Routing";
import { BrowserRouter } from "react-router-dom";
import { TokenContextController } from "context/UserContext";

const App = () => {
  return (
    <TokenContextController>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </TokenContextController>
  );
};

export default App;
