import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "common/emailRegex";
import * as Styled from "./SignIn.styled";
import { Paths } from "components/pages/Pages";
import axios from "axios";

type SignInTypes = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>();

  const onSubmit = async (data: any) => {
    const url = "http://localhost:1337/api/auth/local";
    try {
      const res = await axios.post(url, {
        identifier: data.email,
        password: data.password,
      });
      console.log({ res });
    } catch (error) {
      console.log(error);
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

      <div>
        <span>Don't have an account?</span>
        <Styled.Link to={Paths.SignUp}>Sign up</Styled.Link>
      </div>
    </Styled.Wrapper>
  );
};

export default SignIn;
