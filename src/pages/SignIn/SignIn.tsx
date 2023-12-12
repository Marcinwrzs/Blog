import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "common/emailRegex";
import * as Styled from "./SignIn.styled";
import { Paths } from "components/pages/Pages";
import { storeUser } from "api/handlers/userData";
import { useNavigate } from "react-router";
import axios from "axios";
import { userIdentifier, useTokenContext } from "context/UserContext";

type SignInTypes = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { onTokenSave, accessToken } = useTokenContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>();

  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const url = "http://localhost:1337/api/auth/local";
    try {
      const res = await axios.post(url, {
        identifier: data.email,
        password: data.password,
      });

      if (res.data.jwt) {
        const {
          jwt,
          user: { username },
        } = res.data;
        onTokenSave({
          newToken: jwt,
          storeTokenInStorage: true,
        });
        storeUser(res.data);
        localStorage.setItem(userIdentifier, JSON.stringify({ jwt, username }));
        navigate(Paths.Home);
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <Styled.Wrapper>
      <h1>Welcome back</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Styled.Input>
          Email
          <Styled.TextInput
            type="email"
            {...register("email", {
              required: "This field cannot be empty",
              pattern: {
                value: emailRegex,
                message: "Please use a valid email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </Styled.Input>
        <Styled.Input>
          Password
          <Styled.TextInput
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </Styled.Input>
        <Styled.Button type="submit">Login</Styled.Button>
      </form>
      {isError && <h4>Something went wrong. Please try again</h4>}
      <div>
        <span>Don't have an account?</span>
        <Styled.Link to={Paths.SignUp}>Sign up</Styled.Link>
      </div>
    </Styled.Wrapper>
  );
};

export default SignIn;
