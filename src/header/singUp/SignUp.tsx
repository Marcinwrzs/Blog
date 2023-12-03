import { Paths } from "components/pages/Pages";
import * as Styled from "./SignUp.styled";

const SignUp: React.FC = () => {
  return (
    <Styled.Link to={Paths.SignUp}>
      <p>Get started</p>
    </Styled.Link>
  );
};

export default SignUp;
