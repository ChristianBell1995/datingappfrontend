import { useRouter } from "next/router";
import Button from "../../components/atoms/Button/Button";

const Success = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        You have successfully signed up!
      </h1>
      <Button text="Log In" type="button" onClick={() => router.push("/")} />
    </div>
  );
};

export default Success;
