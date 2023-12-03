import { Paths } from "components/pages/Pages";
import { useForm } from "react-hook-form";
import * as Styled from "./SignUp.Styled";

type SignUpTypes = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpTypes>();

  const onSubmit = (data: any) => {
    console.log("Submitted data:", data);
  };

  return (
    <Styled.Wrapper>
      <h1>Create your account</h1>

      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input>
          <span>Name</span>
          <Styled.TextInput
            type="text"
            {...register("fullName", { required: "Full name is required" })}
          />
          <p>{errors.fullName?.message}</p>
        </Styled.Input>

        <Styled.Input>
          Email:
          <Styled.TextInput
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </Styled.Input>

        <Styled.Input>
          Password:
          <Styled.TextInput
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <p>{errors.password?.message}</p>
        </Styled.Input>

        <Styled.Button type="submit">Submit</Styled.Button>
      </form>

      <div>
        <span>Already have an account?</span>
        <Styled.Link to={Paths.SignIn}>Sign In</Styled.Link>
      </div>
    </Styled.Wrapper>
  );
};

export default SignUp;
