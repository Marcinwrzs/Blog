import { Paths } from "layout/routes/Routing";
import * as Styled from "./Logo.styled";

const Logo = () => {
  return (
    <Styled.Link to={Paths.Home}>
      <img src={"/Logo.png"} alt="logo" />
    </Styled.Link>
  );
};

export default Logo;
