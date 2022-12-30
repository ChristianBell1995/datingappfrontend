import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import useLoginMutation, {
  LoginMutationBody,
} from "../../../api/hooks/useLoginMutation";
import { ErrorMessageInterface } from "../../../utils/errorMessageInterface";
import Button from "../../atoms/Button/Button";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import Input from "../../atoms/Input/Input";

const LoginForm = () => {
  const loginMutation = useLoginMutation();

  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginMutationBody>();

  const onSubmit: SubmitHandler<LoginMutationBody> = (data) => {
    loginMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onError: (error) => {
          const err = error as ErrorMessageInterface;
          if (err.response.data.error === "Record not found") {
            setError(
              "email",
              { type: "custom", message: "Email not found" },
              { shouldFocus: true }
            );
          }
          if (err.response.data.error === "Incorrect Password") {
            setError(
              "password",
              {
                type: "custom",
                message: "Incorrect Password",
              },
              { shouldFocus: true }
            );
          }
        },
        onSuccess: () => {
          push("/profiles");
        },
      }
    );
  };

  return (
    <div className="bg-white border-solid border-2 border-grey shadow-lg rounded px-8 pt-6 pb-8 mb-4 sm:px-12 sm:pt-8 sm:pb-10 sm:mb-6 lg:px-16 lg:pt-10 lg:pb-12 lg:mb-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          register={register("email", { required: "Field is required" })}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="********"
          register={register("password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}

        <div className="mt-4 flex items-center justify-between">
          <Button text="Sign In" type="submit" />
          <Link
            className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-700"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
