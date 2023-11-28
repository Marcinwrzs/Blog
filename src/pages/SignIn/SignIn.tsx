import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "common/emailRegex";

type SignInTypes = {
  name: string;
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>();

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div>
      <h1>SignIn</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Name:
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p>{errors.name?.message}</p>
        </label>
        <label>
          Email:
          <input
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
        </label>
        <label>
          Password:
          <input
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
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
