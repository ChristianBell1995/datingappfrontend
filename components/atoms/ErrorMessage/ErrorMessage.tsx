const ErrorMessage = ({ message }: { message?: string }) => {
  console.log(message);
  return <p className="text-red-700 pb-1">{message}</p>;
};

export default ErrorMessage;
