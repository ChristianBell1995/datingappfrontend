import HeaderText from "../components/atoms/HeaderText/HeaderText";
import LoginForm from "../components/molecules/LoginForm/LoginForm";
import LoggedOutLayout from "../components/organisms/LoggedOutLayout/LoggedOutLayout";

const LoginPage = () => {
  return (
    <LoggedOutLayout
      header={<HeaderText text={"Muzz Match"} />}
      content={<LoginForm />}
    />
  );
};

export default LoginPage;
