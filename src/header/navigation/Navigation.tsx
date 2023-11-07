import * as Styled from "./Navigation.styled";
import SignIn from "header/signIn/SignIn";
import SignUp from "header/singUp/SignUp";

const Navigation: React.FC = () => {
  return (
    <Styled.NavigationWrapper>
      <p>Navigation</p>
      <SignIn />
      <SignUp />
    </Styled.NavigationWrapper>
  );
};

export default Navigation;
