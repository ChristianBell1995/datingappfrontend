import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import useSignUpMutation, {
  SignUpMutationBody,
} from "../../../api/hooks/useSignUpMutation";
import { ErrorMessageInterface } from "../../../utils/errorMessageInterface";
import Button from "../../atoms/Button/Button";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import FormContainer from "../../atoms/FormContainer/FormContainer";
import Input from "../../atoms/Input/Input";

const SignUpForm = () => {
  const signUpMutation = useSignUpMutation();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpMutationBody>();

  const onSubmit: SubmitHandler<SignUpMutationBody> = (data) => {
    signUpMutation.mutate(
      {
        email: data.email,
        password: data.password,
        age: data.age,
        name: data.name,
        gender: data.gender,
      },
      {
        onError: (error) => {
          const err = error as ErrorMessageInterface;
          if (err.response.data.error === "Email Already Taken") {
            setError(
              "email",
              {
                type: "custom",
                message: "Account already exists for this user",
              },
              { shouldFocus: true }
            );
          }
        },
        onSuccess: () => {
          push("/signup/success");
        },
      }
    );
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          id="name"
          type="string"
          placeholder="Name"
          register={register("name", { required: "Field is required" })}
        />
        {errors.name && <ErrorMessage message={errors.name.message} />}
        <Input
          label="Gender"
          id="gender"
          type="string"
          placeholder="Gender"
          register={register("gender", { required: "Field is required" })}
        />
        {errors.gender && <ErrorMessage message={errors.gender.message} />}
        <Input
          label="Age"
          id="age"
          type="number"
          placeholder="Age"
          register={register("age", { required: "Field is required" })}
        />
        {errors.age && <ErrorMessage message={errors.age.message} />}

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
          <Button text="Sign Up" type="submit" />
          <Link
            className="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-700"
            href="/"
          >
            Back to login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
