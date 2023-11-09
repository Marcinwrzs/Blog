import * as Styled from "./Navigation.styled";
import SignIn from "header/signIn/SignIn";
import SignUp from "header/singUp/SignUp";

const Navigation: React.FC = () => {
  return (
    <Styled.NavigationWrapper>
      <div>Category 1</div>
      <div>Category 2</div>
      <div>Category 3</div>
      <SignIn />
      <SignUp />
    </Styled.NavigationWrapper>
  );
};

export default Navigation;
