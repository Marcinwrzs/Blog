import * as Styled from "./Navigation.styled";
import SignIn from "header/signIn/SignIn";
import SignUp from "header/singUp/SignUp";

const Navigation: React.FC = () => {
  return (
    <Styled.NavigationWrapper>
      <Styled.Category>Category 1</Styled.Category>
      <Styled.Category>Category 2</Styled.Category>
      <Styled.Category>Category 3</Styled.Category>
      <SignIn />
      <SignUp />
    </Styled.NavigationWrapper>
  );
};

export default Navigation;
