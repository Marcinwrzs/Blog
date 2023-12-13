import * as Styled from "./Header.styled";
import { Paths } from "layout/routes/Routing";
import { useTokenContext } from "context/UserContext";
import Logout from "components/Logout/Logout";

const Header = () => {
  const { accessToken } = useTokenContext();

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Logo to={Paths.Home}>
          <img src={"/Logo.png"} alt="logo" />
        </Styled.Logo>

        <Styled.Navigation>
          <Styled.Category>
            <Styled.Link to={Paths.Category + "category1"}>
              Category 1
            </Styled.Link>
            <Styled.Link to={Paths.Category + "category2"}>
              Category 2
            </Styled.Link>
            <Styled.Link to={Paths.Category + "category3"}>
              Category 3
            </Styled.Link>
          </Styled.Category>

          {accessToken ? (
            <Logout />
          ) : (
            <>
              <Styled.Link to={Paths.SignIn}>
                <div>Sign In</div>
              </Styled.Link>
              <Styled.SignUp to={Paths.SignUp}>
                <p>Get started</p>
              </Styled.SignUp>
            </>
          )}
        </Styled.Navigation>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
