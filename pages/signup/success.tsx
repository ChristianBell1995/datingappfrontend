import { useRouter } from "next/router";
import Button from "../../components/atoms/Button/Button";
import HeaderText from "../../components/atoms/HeaderText/HeaderText";
import LoggedOutLayout from "../../components/organisms/LoggedOutLayout/LoggedOutLayout";

const Success = () => {
  const router = useRouter();

  return (
    <LoggedOutLayout
      header={<HeaderText text={"Success!"} />}
      content={
        <div className="bg-white border-solid border-2  border-grey text-center shadow-lg rounded-3xl px-8 pt-6 pb-8 m-6">
          <h1 className="text-gray-900 mb-4">
            You have successfully signed up! Now go log in!
          </h1>
          <Button
            text="Log In"
            type="button"
            onClick={() => router.push("/")}
          />
        </div>
      }
    />
  );
};

export default Success;
