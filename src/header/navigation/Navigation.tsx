import * as Styled from "./Navigation.styled";
import SignIn from "header/signIn/SignIn";
import SignUp from "header/singUp/SignUp";
import { Paths } from "layout/routes/Routing";
import Logout from "header/logout/Logout";
import { useTokenContext } from "context/UserContext";

const Navigation = () => {
  const { accessToken } = useTokenContext();

  return (
    <Styled.NavigationWrapper>
      <Styled.Category>
        <Styled.Link to={Paths.Category + "category1"}>Category 1</Styled.Link>
        <Styled.Link to={Paths.Category + "category2"}>Category 2</Styled.Link>
        <Styled.Link to={Paths.Category + "category3"}>Category 3</Styled.Link>
      </Styled.Category>

      {accessToken ? (
        <Logout />
      ) : (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
    </Styled.NavigationWrapper>
  );
};

export default Navigation;
