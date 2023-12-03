import { Paths } from "components/pages/Pages";
import * as Styled from "./Logo.styled";

const Logo: React.FC = () => {
  return (
    <Styled.Link to={Paths.Home}>
      <img src={require("img/Logo.png")} alt="logo" />
    </Styled.Link>
  );
};

export default Logo;
