import Logo from "header/logo/Logo";
import Navigation from "header/navigation/Navigation";
import SignIn from "header/signIn/SignIn";
import SignUp from "header/singUp/SignUp";

const Header: React.FC = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <SignIn />
      <SignUp />
    </>
  );
};

export default Header;
