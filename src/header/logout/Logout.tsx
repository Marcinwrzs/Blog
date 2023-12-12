import { Paths } from "components/pages/Pages";
import { userIdentifier, useTokenContext } from "context/UserContext";
import { useNavigate } from "react-router";
import * as Styled from "./Logout.styled";

const Logout = () => {
  const { onTokenSave } = useTokenContext();
  const navigate = useNavigate();

  const clearToken = (): void => {
    onTokenSave({
      newToken: "",
      storeTokenInStorage: false,
    });
    localStorage.removeItem(userIdentifier);
  };

  const logout = () => {
    clearToken();
    localStorage.removeItem(userIdentifier);
    navigate(Paths.SignIn);
  };

  return (
    <>
      <Styled.Button onClick={logout}>Logout</Styled.Button>
    </>
  );
};

export default Logout;
