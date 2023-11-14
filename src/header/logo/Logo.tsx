import { Paths } from "components/pages/Pages";
import * as Styled from "./Logo.styled";

const Logo: React.FC = () => {
  return (
    <Styled.Link to={Paths.Home}>
      <h1>Logo</h1>
    </Styled.Link>
  );
};

export default Logo;
