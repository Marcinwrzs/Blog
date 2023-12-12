import SignIn from "components/SignIn/SignIn";
import Category from "components/Category/Category";
import HomePage from "components/HomePage/HomePage";
import SignUp from "components/SingUp/SignUp";
import { Route, Routes } from "react-router-dom";
import * as Styled from "./Routing.styled";
import ErrorPage from "components/ErrorPage/ErrorPage";

export enum Paths {
  Home = "/",
  SignUp = "/signUp",
  SignIn = "/SignIn",
  Category = "/category/",
  ErrorPage = "*",
}

const Routing = () => {
  return (
    <Styled.Wrapper>
      <Routes>
        <Route path={Paths.Home} element={<HomePage />} />
        <Route path={Paths.SignUp} element={<SignUp />} />
        <Route path={Paths.SignIn} element={<SignIn />} />
        <Route path={Paths.Category + ":category"} element={<Category />} />
        <Route path={Paths.ErrorPage} element={<ErrorPage />} />
      </Routes>
    </Styled.Wrapper>
  );
};

export default Routing;
