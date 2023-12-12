import { Paths } from "components/pages/Pages";
import * as Styled from "./SignIn.styled";

const SignIn = () => {
  return (
    <Styled.Link to={Paths.SignIn}>
      <div>Sign In</div>
    </Styled.Link>
  );
};

export default SignIn;
