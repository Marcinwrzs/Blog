import SignIn from "pages/SignIn/SignIn";
import Category from "pages/category/Category";
import HomePage from "pages/HomePage/HomePage";
import SignUp from "pages/singUp/SignUp";
import { Route, Routes } from "react-router-dom";
import * as Styled from "./Pages.Styled";

export enum Paths {
  Home = "/",
  SignUp = "/signUp",
  SignIn = "/SignIn",
  Category = "/category/",
}

const Pages: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Routes>
        <Route path={Paths.Home} element={<HomePage />} />
        <Route path={Paths.SignUp} element={<SignUp />} />
        <Route path={Paths.SignIn} element={<SignIn />} />
        <Route path={Paths.Category + ":category"} element={<Category />} />
      </Routes>
    </Styled.Wrapper>
  );
};

export default Pages;
