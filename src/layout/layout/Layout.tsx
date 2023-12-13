import { Outlet } from "react-router-dom";
import * as Styled from "./Layout.styled";

const Layout = () => {
  return (
    <Styled.Wrapper>
      <Outlet />
    </Styled.Wrapper>
  );
};

export default Layout;
