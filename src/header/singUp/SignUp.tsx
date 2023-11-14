import { Paths } from "components/pages/Pages";
import * as Styled from "./SignUp.styled";
import { NavLink } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <NavLink to={Paths.SignUp}>
      <Styled.Button>Get started</Styled.Button>
    </NavLink>
  );
};

export default SignUp;
