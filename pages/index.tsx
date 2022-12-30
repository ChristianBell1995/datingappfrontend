import LoginForm from "../components/molecules/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <main className="h-screen flex items-center">
        <div className="container flex-1 mx-auto ">
          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
