import { NavLink } from "react-router-dom";
import * as Styled from "./SignUp.Styled";
import { Paths } from "components/pages/Pages";
import { useForm } from "react-hook-form";

const SignUp: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: any) => {
    console.log("Submitted data:", data);
  };

  return (
    <div>
      <h1>Get started</h1>

      <h1>Sign Up</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name:
          <input
            type="text"
            {...register("fullName", { required: "Full name is required" })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>Already have an account?</p>
      <NavLink to={Paths.SignIn}>Sign In</NavLink>
    </div>
  );
};

export default SignUp;
