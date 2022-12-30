import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/enums";

export interface SignUpMutationResponse {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
  createdAt: string;
  updatedAt: string;
}

export type SignUpMutationBody = {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
};

const useSignUpMutation = () => {
  return useMutation(async (loginDetails: SignUpMutationBody) => {
    loginDetails.age = Number(loginDetails.age);
    return await axios.post<SignUpMutationResponse>(
      `${BASE_URL}/user/create`,
      loginDetails
    );
  });
};

export default useSignUpMutation;
