import Logo from "header/logo/Logo";
import Navigation from "header/navigation/Navigation";
import * as Styled from "./Header.styled";

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Logo />
      <Navigation />
    </Styled.Header>
  );
};

export default Header;
