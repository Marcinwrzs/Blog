import { Paths } from "layout/routes/Routing";
import * as Styled from "./SignUp.styled";

const SignUp = () => {
  return (
    <Styled.Link to={Paths.SignUp}>
      <p>Get started</p>
    </Styled.Link>
  );
};

export default SignUp;
