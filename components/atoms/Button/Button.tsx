const Button = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}) => {
  return (
    <button
      className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
