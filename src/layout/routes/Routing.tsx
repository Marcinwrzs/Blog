import SignIn from "components/SignIn/SignIn";
import Category from "components/Category/Category";
import HomePage from "components/HomePage/HomePage";
import SignUp from "components/SingUp/SignUp";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Layout from "layout/layout/Layout";

export enum Paths {
  Home = "/",
  SignUp = "/signUp",
  SignIn = "/SignIn",
  Category = "/category/",
  ErrorPage = "*",
}

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={Paths.Home} element={<HomePage />} />
        <Route path={Paths.SignUp} element={<SignUp />} />
        <Route path={Paths.SignIn} element={<SignIn />} />
        <Route path={Paths.Category + ":category"} element={<Category />} />
        <Route path={Paths.ErrorPage} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
