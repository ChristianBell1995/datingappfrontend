import { UseFormRegisterReturn } from "react-hook-form";

const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<any>;
}) => {
  return (
    <div className="mb-1">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
