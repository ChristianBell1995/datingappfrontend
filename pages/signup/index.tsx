import SignUpForm from "../../components/molecules/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <main className="h-screen flex items-center">
        <div className="container flex-1 mx-auto ">
          <SignUpForm />
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
