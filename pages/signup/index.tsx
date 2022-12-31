import HeaderText from "../../components/atoms/HeaderText/HeaderText";
import SignUpForm from "../../components/molecules/SignUpForm/SignUpForm";
import LoggedOutLayout from "../../components/organisms/LoggedOutLayout/LoggedOutLayout";

const SignUpPage = () => {
  return (
    <LoggedOutLayout
      header={<HeaderText text={"Sign up"} />}
      content={<SignUpForm />}
    />
  );
};

export default SignUpPage;
